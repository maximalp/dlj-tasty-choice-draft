import { redis, KEYS } from "@/lib/redis";

export async function GET() {
  const [flavorsRaw, lockedRaw, revealedRaw, claimsRaw, positionsRaw] =
    await Promise.all([
      redis.get(KEYS.flavors),
      redis.get(KEYS.locked),
      redis.get(KEYS.revealed),
      redis.hgetall(KEYS.claims),
      redis.get(KEYS.positions),
    ]);

  const flavors = flavorsRaw || [];
  const locked = String(lockedRaw) === "1";
  const revealed = String(revealedRaw) === "1";
  const claims = claimsRaw || {};

  // Parse each claim value (stored as JSON strings).
  const parsedClaims = {};
  for (const [flavorId, value] of Object.entries(claims)) {
    try {
      parsedClaims[flavorId] =
        typeof value === "string" ? JSON.parse(value) : value;
    } catch {
      // skip malformed entries
    }
  }

  const positions = revealed ? positionsRaw || {} : null;

  return Response.json({
    flavors,
    locked,
    revealed,
    claims: parsedClaims,
    positions,
  });
}
