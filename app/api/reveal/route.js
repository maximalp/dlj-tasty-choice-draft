import { redis, KEYS } from "@/lib/redis";

export async function POST() {
  const locked = await redis.get(KEYS.locked);
  if (String(locked) !== "1") {
    return Response.json(
      { error: "Seal the tin before revealing." },
      { status: 409 }
    );
  }
  await redis.set(KEYS.revealed, "1");
  return Response.json({ ok: true });
}
