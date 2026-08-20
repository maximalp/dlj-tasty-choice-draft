(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$flavors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/flavors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/basePath.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Scales with --font-scale, which globals.css bumps up on desktop
// breakpoints. The DLJ heading stays a plain number so it's excluded.
const FS = (px)=>`calc(${px}px * var(--font-scale, 1))`;
_c = FS;
async function getState() {
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"]}/api/state`, {
        cache: "no-store"
    });
    return res.json();
}
async function postJSON(path, body) {
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"]}${path}`, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 30
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "brand-heading",
                style: {
                    fontSize: 46,
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c1 = Header;
function ResetModal({ pin, setPin, error, onCancel, onConfirm }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "var(--heading)",
                borderRadius: 14,
                padding: "24px 22px",
                width: "100%",
                maxWidth: 300
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 10,
                        marginTop: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c2 = ResetModal;
function Page() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [teamName, setTeamName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetModalOpen, setResetModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetPin, setResetPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetError, setResetError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const teamInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statusTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoSealRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const meowAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playMeow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[playMeow]": ()=>{
            try {
                if (!meowAudioRef.current) {
                    meowAudioRef.current = new Audio(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$basePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"]}/sounds/meow.mp3`);
                }
                const audio = meowAudioRef.current;
                audio.currentTime = 0;
                audio.play().catch({
                    "Page.useCallback[playMeow]": ()=>{}
                }["Page.useCallback[playMeow]"]);
            } catch  {
            // ignore audio failures (e.g. autoplay policy) — claiming still works
            }
        }
    }["Page.useCallback[playMeow]"], []);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[refresh]": async ()=>{
            try {
                const data = await getState();
                setState(data);
            } catch  {
            // keep last known state on transient network errors
            } finally{
                setLoading(false);
            }
        }
    }["Page.useCallback[refresh]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            refresh();
            const id = setInterval({
                "Page.useEffect.id": ()=>{
                    const active = document.activeElement;
                    const typing = active === teamInputRef.current;
                    if (!typing) refresh();
                }
            }["Page.useEffect.id"], 3500);
            return ({
                "Page.useEffect": ()=>clearInterval(id)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        refresh
    ]);
    // Jump to the top when the draft order appears, whether that's from
    // tapping "Reveal" or loading a page that was already revealed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (state?.revealed) {
                window.scrollTo(0, 0);
            }
        }
    }["Page.useEffect"], [
        state?.revealed
    ]);
    // Auto-seal with the hardcoded flavor list the first time anyone loads
    // the app before it's been sealed — no manual setup step.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (state && !state.locked && !autoSealRef.current) {
                autoSealRef.current = true;
                ({
                    "Page.useEffect": async ()=>{
                        const { ok, data } = await postJSON("/api/seal", {
                            flavors: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$flavors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FLAVORS"]
                        });
                        if (!ok) {
                            flash(data.error || "Couldn't seal automatically.");
                        }
                        refresh();
                    }
                })["Page.useEffect"]();
            }
        }
    }["Page.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 480,
            margin: "0 auto",
            padding: "36px 20px 60px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            loading || !state ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: FS(13)
                },
                children: "Opening the tin…"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 306,
                columnNumber: 9
            }, this) : !state.locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: FS(13)
                },
                children: "Setting things up…"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 310,
                columnNumber: 9
            }, this) : state.revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealScreen, {
                state: state,
                onReset: openResetModal
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 314,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClaimScreen, {
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
            resetModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetModal, {
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
_s(Page, "WCVr29DZtDlRPYVsT93gcRGRbwg=");
_c3 = Page;
function ClaimScreen({ state, teamName, setTeamName, teamInputRef, onClaim, onReveal, onReset }) {
    const total = state.flavors.length;
    const claimedCount = Object.keys(state.claims).length;
    const myName = teamName.trim().toLowerCase();
    const allClaimed = total > 0 && claimedCount === total;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: f.name
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 427,
                                columnNumber: 15
                            }, this),
                            taken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c4 = ClaimScreen;
function RevealScreen({ state, onReset }) {
    const rows = state.flavors.map((f)=>({
            f,
            pos: state.positions ? state.positions[f.id] : null,
            claim: state.claims[f.id]
        })).filter((r)=>r.claim && r.pos).sort((a, b)=>a.pos - b.pos);
    const unclaimedCount = state.flavors.length - rows.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: rows.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            i < rows.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            unclaimedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginTop: 26
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c5 = RevealScreen;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FS");
__turbopack_context__.k.register(_c1, "Header");
__turbopack_context__.k.register(_c2, "ResetModal");
__turbopack_context__.k.register(_c3, "Page");
__turbopack_context__.k.register(_c4, "ClaimScreen");
__turbopack_context__.k.register(_c5, "RevealScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/basePath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/flavors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_09p5-bv._.js.map