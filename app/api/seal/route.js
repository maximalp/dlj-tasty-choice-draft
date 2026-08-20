import { redis, KEYS } from "@/lib/redis";

function shuffledPositions(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const rawFlavors = Array.isArray(body.flavors) ? body.flavors : [];
  const force = body.force === true;

  const flavors = rawFlavors
    .map((name) => (typeof name === "string" ? name.trim() : ""))
    .filter(Boolean);

  if (flavors.length < 2) {
    return Response.json(
      { error: "Add at least two flavors." },
      { status: 400 }
    );
  }

  const dedup = new Set(flavors.map((f) => f.toLowerCase()));
  if (dedup.size !== flavors.length) {
    return Response.json(
      { error: "Two flavors look identical. Make each one unique." },
      { status: 400 }
    );
  }

  const alreadyLocked = String(await redis.get(KEYS.locked)) === "1";
  if (alreadyLocked && !force) {
    return Response.json(
      { error: "Already sealed. Reset the tin first." },
      { status: 409 }
    );
  }

  const flavorRecords = flavors.map((name, i) => ({ id: String(i), name }));
  const posArr = shuffledPositions(flavorRecords.length);
  const positions = {};
  flavorRecords.forEach((f, i) => {
    positions[f.id] = posArr[i];
  });

  await redis.del(KEYS.claims);
  await Promise.all([
    redis.set(KEYS.flavors, flavorRecords),
    redis.set(KEYS.positions, positions),
    redis.set(KEYS.locked, "1"),
    redis.set(KEYS.revealed, "0"),
  ]);

  return Response.json({ ok: true, flavors: flavorRecords });
}
