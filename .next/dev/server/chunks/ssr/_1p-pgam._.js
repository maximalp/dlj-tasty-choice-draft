module.exports = [
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$flavors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/flavors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/basePath.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Scales with --font-scale, which globals.css bumps up on desktop
// breakpoints. The DLJ heading stays a plain number so it's excluded.
const FS = (px)=>`calc(${px}px * var(--font-scale, 1))`;
async function getState() {
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_PATH"]}/api/state`, {
        cache: "no-store"
    });
    return res.json();
}
async function postJSON(path, body) {
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_PATH"]}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body || {})
    });
    const data = await res.json().catch(()=>({}));
    return {
        ok: res.ok,
        data
    };
}
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 30
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "brand-heading",
                style: {
                    fontSize: 46,
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--ink)"
                        },
                        children: "DLJ"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    " 2026"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "brand-tagline",
                style: {
                    fontSize: FS(13)
                },
                children: "Tasty Choice Draft."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function ResetModal({ pin, setPin, error, onCancel, onConfirm }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            background: "rgba(20,16,8,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 22,
            zIndex: 50
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "var(--heading)",
                borderRadius: 14,
                padding: "24px 22px",
                width: "100%",
                maxWidth: 300
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "section-heading",
                    style: {
                        fontSize: FS(18),
                        color: "var(--ink)",
                        marginBottom: 8
                    },
                    children: "Reset tin"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: FS(11.5),
                        color: "rgba(36,40,59,0.65)",
                        textAlign: "center",
                        lineHeight: 1.5,
                        margin: "0 0 18px"
                    },
                    children: "Enter the league PIN to continue. This clears every claim and the flavor list, and can't be undone."
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    value: pin,
                    onChange: (e)=>setPin(e.target.value),
                    placeholder: "PIN",
                    autoFocus: true,
                    style: {
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#FBF0D9",
                        border: "none",
                        borderRadius: 8,
                        padding: "10px 12px",
                        fontSize: FS(13),
                        color: "var(--ink)",
                        textAlign: "center",
                        marginBottom: 8
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: FS(11.5),
                        color: "#B5533C",
                        textAlign: "center",
                        margin: "0 0 10px"
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 100,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 10,
                        marginTop: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            style: {
                                flex: 1,
                                textAlign: "center",
                                padding: 11,
                                borderRadius: 8,
                                border: "1px solid rgba(36,40,59,0.3)",
                                background: "transparent",
                                fontSize: FS(12),
                                fontWeight: 500,
                                color: "var(--ink)"
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            style: {
                                flex: 1,
                                textAlign: "center",
                                padding: 11,
                                borderRadius: 8,
                                background: "#B5533C",
                                fontSize: FS(12),
                                fontWeight: 500,
                                color: "var(--heading)",
                                border: "none"
                            },
                            children: "Confirm reset"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function Page() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [teamName, setTeamName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetModalOpen, setResetModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetPin, setResetPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetError, setResetError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const teamInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statusTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoSealRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const meowAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playMeow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            if (!meowAudioRef.current) {
                meowAudioRef.current = new Audio(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_PATH"]}/sounds/meow.mp3`);
            }
            const audio = meowAudioRef.current;
            audio.currentTime = 0;
            audio.play().catch(()=>{});
        } catch  {
        // ignore audio failures (e.g. autoplay policy) — claiming still works
        }
    }, []);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const data = await getState();
            setState(data);
        } catch  {
        // keep last known state on transient network errors
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refresh();
        const id = setInterval(()=>{
            const active = document.activeElement;
            const typing = active === teamInputRef.current;
            if (!typing) refresh();
        }, 3500);
        return ()=>clearInterval(id);
    }, [
        refresh
    ]);
    // Jump to the top when the draft order appears, whether that's from
    // tapping "Reveal" or loading a page that was already revealed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state?.revealed) {
            window.scrollTo(0, 0);
        }
    }, [
        state?.revealed
    ]);
    // Auto-seal with the hardcoded flavor list the first time anyone loads
    // the app before it's been sealed — no manual setup step.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state && !state.locked && !autoSealRef.current) {
            autoSealRef.current = true;
            (async ()=>{
                const { ok, data } = await postJSON("/api/seal", {
                    flavors: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$flavors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FLAVORS"]
                });
                if (!ok) {
                    flash(data.error || "Couldn't seal automatically.");
                }
                refresh();
            })();
        }
    }, [
        state,
        refresh
    ]);
    const flash = (msg)=>{
        setStatus(msg);
        clearTimeout(statusTimer.current);
        statusTimer.current = setTimeout(()=>setStatus(null), 4500);
    };
    async function handleClaim(flavorId, flavorName) {
        const team = teamName.trim();
        if (!team) {
            flash("Type your team name first.");
            return;
        }
        const { ok, data } = await postJSON("/api/claim", {
            flavorId,
            team
        });
        if (!ok) {
            flash(data.error || "Couldn't claim that flavor.");
            refresh();
            return;
        }
        playMeow();
        flash(`${team} claimed ${flavorName}.`);
        setTeamName("");
        refresh();
    }
    async function handleReveal() {
        const { ok, data } = await postJSON("/api/reveal");
        if (!ok) {
            flash(data.error || "Couldn't reveal yet.");
            return;
        }
        refresh();
    }
    function openResetModal() {
        setResetPin("");
        setResetError(null);
        setResetModalOpen(true);
    }
    async function confirmReset() {
        if (!resetPin.trim()) {
            setResetError("Enter the PIN first.");
            return;
        }
        const { ok, data } = await postJSON("/api/reset", {
            pin: resetPin.trim()
        });
        if (!ok) {
            setResetError(data.error || "Couldn't reset.");
            return;
        }
        setResetModalOpen(false);
        setTeamName("");
        flash("Tin reset.");
        refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 480,
            margin: "0 auto",
            padding: "36px 20px 60px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: FS(12.5),
                    textAlign: "center",
                    color: "var(--ink)",
                    background: "rgba(251,240,217,0.6)",
                    borderRadius: "var(--radius)",
                    padding: "9px 12px",
                    marginBottom: 18
                },
                children: status
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 290,
                columnNumber: 9
            }, this),
            loading || !state ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: FS(13)
                },
                children: "Opening the tin…"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 306,
                columnNumber: 9
            }, this) : !state.locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: FS(13)
                },
                children: "Setting things up…"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 310,
                columnNumber: 9
            }, this) : state.revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealScreen, {
                state: state,
                onReset: openResetModal
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 314,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClaimScreen, {
                state: state,
                teamName: teamName,
                setTeamName: setTeamName,
                teamInputRef: teamInputRef,
                onClaim: handleClaim,
                onReveal: handleReveal,
                onReset: openResetModal
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 316,
                columnNumber: 9
            }, this),
            resetModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetModal, {
                pin: resetPin,
                setPin: setResetPin,
                error: resetError,
                onCancel: ()=>setResetModalOpen(false),
                onConfirm: confirmReset
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 328,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
function ClaimScreen({ state, teamName, setTeamName, teamInputRef, onClaim, onReveal, onReset }) {
    const total = state.flavors.length;
    const claimedCount = Object.keys(state.claims).length;
    const myName = teamName.trim().toLowerCase();
    const allClaimed = total > 0 && claimedCount === total;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-heading",
                style: {
                    fontSize: FS(24),
                    marginBottom: 8
                },
                children: "Pick your flavor"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: FS(13.5),
                    marginBottom: 22
                },
                children: "Type your team name, then tap an unclaimed flavor. It's yours for the draft — one flavor per team."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: teamInputRef,
                type: "text",
                value: teamName,
                onChange: (e)=>setTeamName(e.target.value),
                placeholder: "Your team name",
                autoComplete: "off",
                style: {
                    width: "100%",
                    boxSizing: "border-box",
                    background: "var(--surface)",
                    border: "none",
                    borderRadius: "var(--radius)",
                    padding: "12px 14px",
                    fontSize: FS(13.5),
                    color: "var(--ink)",
                    marginBottom: 20,
                    textAlign: "center"
                }
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 10
                },
                children: state.flavors.map((f)=>{
                    const claim = state.claims[f.id];
                    const mine = claim && claim.team.toLowerCase() === myName && myName.length > 0;
                    const taken = Boolean(claim);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!taken && onClaim(f.id, f.name),
                        disabled: taken && !mine,
                        style: {
                            flex: "1 1 160px",
                            maxWidth: 200,
                            whiteSpace: "normal",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 3,
                            padding: "12px 14px",
                            borderRadius: 8,
                            fontSize: FS(12),
                            fontWeight: 500,
                            background: mine ? "var(--ink)" : taken ? "rgba(251,240,217,0.35)" : "var(--surface)",
                            color: mine ? "var(--heading)" : taken ? "rgba(36,40,59,0.4)" : "var(--ink)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: f.name
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 427,
                                columnNumber: 15
                            }, this),
                            taken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: FS(10),
                                    fontWeight: 400,
                                    opacity: 0.85
                                },
                                children: mine ? "You" : `Claimed — ${claim.team}`
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 429,
                                columnNumber: 17
                            }, this)
                        ]
                    }, f.id, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 398,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    fontSize: FS(11.5),
                    color: "var(--ink-muted)",
                    margin: "16px 0 24px"
                },
                children: [
                    claimedCount,
                    " of ",
                    total,
                    " claimed"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onReveal,
                disabled: !allClaimed,
                style: {
                    width: "100%",
                    background: allClaimed ? "var(--ink)" : "rgba(36,40,59,0.15)",
                    color: allClaimed ? "var(--heading)" : "var(--ink-muted)",
                    borderRadius: "var(--radius)",
                    padding: "14px 18px",
                    fontSize: FS(13),
                    fontWeight: 500,
                    marginBottom: 14,
                    cursor: allClaimed ? "pointer" : "not-allowed"
                },
                children: "Reveal draft order"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onReset,
                    style: {
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontSize: FS(11.5),
                        padding: "8px 10px"
                    },
                    children: "Reset tin"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 468,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 355,
        columnNumber: 5
    }, this);
}
function RevealScreen({ state, onReset }) {
    const rows = state.flavors.map((f)=>({
            f,
            pos: state.positions ? state.positions[f.id] : null,
            claim: state.claims[f.id]
        })).filter((r)=>r.claim && r.pos).sort((a, b)=>a.pos - b.pos);
    const unclaimedCount = state.flavors.length - rows.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-heading",
                style: {
                    fontSize: FS(24),
                    marginBottom: 26
                },
                children: "Draft order"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: rows.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 42,
                                            height: 42,
                                            borderRadius: "50%",
                                            background: "var(--heading)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: FS(17),
                                                fontWeight: 500,
                                                color: "var(--ink)"
                                            },
                                            children: r.pos
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 506,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: FS(14.5),
                                            fontWeight: 500,
                                            color: "var(--ink)",
                                            marginTop: 11
                                        },
                                        children: r.claim.team
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: FS(12),
                                            color: "var(--ink-muted)",
                                            marginTop: 3
                                        },
                                        children: r.f.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 505,
                                columnNumber: 13
                            }, this),
                            i < rows.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "33%",
                                    height: 2,
                                    background: "var(--heading)",
                                    margin: "18px auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 537,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.f.id, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            unclaimedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: FS(11.5),
                    marginTop: 26
                },
                children: [
                    unclaimedCount,
                    " flavor",
                    unclaimedCount > 1 ? "s" : "",
                    " went unclaimed and ",
                    unclaimedCount > 1 ? "aren't" : "isn't",
                    " in the order above."
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 551,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginTop: 26
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onReset,
                    style: {
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontSize: FS(11.5),
                        padding: "8px 10px"
                    },
                    children: "Reset tin"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 559,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 558,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 497,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/basePath.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Keep this in sync with the basePath in next.config.js — duplicated
// deliberately rather than shared across the CJS/ESM boundary, since
// it's one short string. next/link and next/image get this prefix
// automatically from Next.js; raw fetch() calls with hardcoded paths
// do not, which is what this constant is for.
__turbopack_context__.s([
    "BASE_PATH",
    ()=>BASE_PATH
]);
const BASE_PATH = "/dljcatfood";
}),
"[project]/lib/flavors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FLAVORS",
    ()=>DEFAULT_FLAVORS
]);
const DEFAULT_FLAVORS = [
    "Fancy Feast Classic Pâté – Chicken Feast",
    "Friskies Pâté – Turkey & Giblets Dinner",
    "Sheba Perfect Portions – Cuts in Gravy Roasted Chicken Entrée",
    "Purina Pro Plan – Savor Adult Chicken & Rice Entrée in Gravy",
    "Hill's Science Diet – Adult Tender Chicken Dinner",
    "Royal Canin – Feline Health Nutrition Instinctive Thin Slices in Gravy",
    "Blue Buffalo Wilderness – Chicken Grain-Free Pâté",
    "Wellness CORE – Grain-Free Turkey & Chicken Pâté",
    "Tiki Cat – Puka Puka Luau (Succulent Chicken in Chicken Consommé)",
    "Weruva – Paw Lickin' Chicken in Gravy",
    "Merrick Purrfect Bistro – Grain-Free Chicken Pâté",
    "Iams Perfect Portions – Cuts in Gravy Healthy Adult Chicken Recipe",
    "Nutro Perfect Portions – Grain-Free Real Chicken Pâté",
    "Applaws – Chicken Breast in Broth"
];
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_1p-pgam._.js.map