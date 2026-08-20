import { redis, KEYS } from "@/lib/redis";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const pin = typeof body.pin === "string" ? body.pin.trim() : "";
  const expected = process.env.RESET_PIN;

  if (!expected) {
    return Response.json(
      { error: "Reset PIN isn't configured on the server." },
      { status: 500 }
    );
  }
  if (pin !== expected) {
    return Response.json(
      { error: "That PIN doesn't match." },
      { status: 401 }
    );
  }

  await redis.del(
    KEYS.flavors,
    KEYS.positions,
    KEYS.locked,
    KEYS.revealed,
    KEYS.claims
  );
  return Response.json({ ok: true });
}
