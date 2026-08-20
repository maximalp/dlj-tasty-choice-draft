import { redis, KEYS } from "@/lib/redis";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const flavorId = typeof body.flavorId === "string" ? body.flavorId : null;
  const team = typeof body.team === "string" ? body.team.trim() : "";

  if (!flavorId || !team) {
    return Response.json(
      { error: "Enter a team name and pick a flavor." },
      { status: 400 }
    );
  }

  const [locked, revealed, flavors, claims] = await Promise.all([
    redis.get(KEYS.locked),
    redis.get(KEYS.revealed),
    redis.get(KEYS.flavors),
    redis.hgetall(KEYS.claims),
  ]);

  if (String(locked) !== "1") {
    return Response.json(
      { error: "The tin isn't sealed yet." },
      { status: 409 }
    );
  }
  if (String(revealed) === "1") {
    return Response.json(
      { error: "The order's already been revealed." },
      { status: 409 }
    );
  }

  const validFlavor = (flavors || []).some((f) => f.id === flavorId);
  if (!validFlavor) {
    return Response.json({ error: "That flavor doesn't exist." }, { status: 400 });
  }

  const existingClaims = claims || {};
  const alreadyClaimedByTeam = Object.values(existingClaims).some((raw) => {
    try {
      const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
      return parsed.team && parsed.team.toLowerCase() === team.toLowerCase();
    } catch {
      return false;
    }
  });
  if (alreadyClaimedByTeam) {
    return Response.json(
      { error: `${team} already claimed a flavor — one per team.` },
      { status: 409 }
    );
  }

  const claimValue = JSON.stringify({ team, ts: Date.now() });
  const wasSet = await redis.hsetnx(KEYS.claims, flavorId, claimValue);

  if (!wasSet) {
    return Response.json(
      { error: "Someone just grabbed that one — pick another." },
      { status: 409 }
    );
  }

  return Response.json({ ok: true });
}
