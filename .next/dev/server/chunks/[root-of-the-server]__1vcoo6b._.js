module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/claim/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.js [app-route] (ecmascript)");
;
async function POST(request) {
    const body = await request.json().catch(()=>({}));
    const flavorId = typeof body.flavorId === "string" ? body.flavorId : null;
    const team = typeof body.team === "string" ? body.team.trim() : "";
    if (!flavorId || !team) {
        return Response.json({
            error: "Enter a team name and pick a flavor."
        }, {
            status: 400
        });
    }
    const [locked, revealed, flavors, claims] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].locked),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].revealed),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].flavors),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].hgetall(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].claims)
    ]);
    if (String(locked) !== "1") {
        return Response.json({
            error: "The tin isn't sealed yet."
        }, {
            status: 409
        });
    }
    if (String(revealed) === "1") {
        return Response.json({
            error: "The order's already been revealed."
        }, {
            status: 409
        });
    }
    const validFlavor = (flavors || []).some((f)=>f.id === flavorId);
    if (!validFlavor) {
        return Response.json({
            error: "That flavor doesn't exist."
        }, {
            status: 400
        });
    }
    const existingClaims = claims || {};
    const alreadyClaimedByTeam = Object.values(existingClaims).some((raw)=>{
        try {
            const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
            return parsed.team && parsed.team.toLowerCase() === team.toLowerCase();
        } catch  {
            return false;
        }
    });
    if (alreadyClaimedByTeam) {
        return Response.json({
            error: `${team} already claimed a flavor — one per team.`
        }, {
            status: 409
        });
    }
    const claimValue = JSON.stringify({
        team,
        ts: Date.now()
    });
    const wasSet = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].hsetnx(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].claims, flavorId, claimValue);
    if (!wasSet) {
        return Response.json({
            error: "Someone just grabbed that one — pick another."
        }, {
            status: 409
        });
    }
    return Response.json({
        ok: true
    });
}
}),
"[project]/lib/redis.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KEYS",
    ()=>KEYS,
    "redis",
    ()=>redis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <locals>");
;
let client;
function getClient() {
    if (client) return client;
    const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
    if (!url || !token) {
        console.warn("Redis env vars are missing. Add the Upstash for Redis integration " + "from the Vercel Storage tab, or fill in .env.local for local dev.");
    }
    client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
        url,
        token
    });
    return client;
}
const redis = new Proxy({}, {
    get (_target, prop) {
        return getClient()[prop];
    }
});
const KEYS = {
    flavors: "dlj:flavors",
    positions: "dlj:positions",
    locked: "dlj:locked",
    revealed: "dlj:revealed",
    claims: "dlj:claims"
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1vcoo6b._.js.map