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
"[project]/app/api/seal/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.js [app-route] (ecmascript)");
;
function shuffledPositions(n) {
    const arr = Array.from({
        length: n
    }, (_, i)=>i + 1);
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
    }
    return arr;
}
async function POST(request) {
    const body = await request.json().catch(()=>({}));
    const rawFlavors = Array.isArray(body.flavors) ? body.flavors : [];
    const force = body.force === true;
    const flavors = rawFlavors.map((name)=>typeof name === "string" ? name.trim() : "").filter(Boolean);
    if (flavors.length < 2) {
        return Response.json({
            error: "Add at least two flavors."
        }, {
            status: 400
        });
    }
    const dedup = new Set(flavors.map((f)=>f.toLowerCase()));
    if (dedup.size !== flavors.length) {
        return Response.json({
            error: "Two flavors look identical. Make each one unique."
        }, {
            status: 400
        });
    }
    const alreadyLocked = String(await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].locked)) === "1";
    if (alreadyLocked && !force) {
        return Response.json({
            error: "Already sealed. Reset the tin first."
        }, {
            status: 409
        });
    }
    const flavorRecords = flavors.map((name, i)=>({
            id: String(i),
            name
        }));
    const posArr = shuffledPositions(flavorRecords.length);
    const positions = {};
    flavorRecords.forEach((f, i)=>{
        positions[f.id] = posArr[i];
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].del(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].claims);
    await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].flavors, flavorRecords),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].positions, positions),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].locked, "1"),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].revealed, "0")
    ]);
    return Response.json({
        ok: true,
        flavors: flavorRecords
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0gntomf._.js.map