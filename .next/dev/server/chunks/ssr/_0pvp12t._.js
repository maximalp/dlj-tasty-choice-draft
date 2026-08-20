module.exports = [
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/flavors'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/basePath'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
async function getState() {
    const res = await fetch(`${BASE_PATH}/api/state`, {
        cache: "no-store"
    });
    return res.json();
}
async function postJSON(path, body) {
    const res = await fetch(`${BASE_PATH}${path}`, {
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
                children: "DLJ"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "brand-tagline",
                style: {
                    fontSize: 13
                },
                children: "Tasty Choice Draft."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 24,
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
                        fontSize: 18,
                        color: "var(--ink)",
                        marginBottom: 8
                    },
                    children: "Reset tin"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 11.5,
                        color: "rgba(36,40,59,0.65)",
                        textAlign: "center",
                        lineHeight: 1.5,
                        margin: "0 0 18px"
                    },
                    children: "Enter the league PIN to continue. This clears every claim and the flavor list, and can't be undone."
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 64,
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
                        fontSize: 13,
                        color: "var(--ink)",
                        textAlign: "center",
                        marginBottom: 8
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 11.5,
                        color: "#B5533C",
                        textAlign: "center",
                        margin: "0 0 10px"
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 96,
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
                                fontSize: 12,
                                fontWeight: 500,
                                color: "var(--ink)"
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 108,
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
                                fontSize: 12,
                                fontWeight: 500,
                                color: "var(--heading)",
                                border: "none"
                            },
                            children: "Confirm reset"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function Page() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flavorText, setFlavorText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_FLAVORS.join("\n"));
    const [teamName, setTeamName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetModalOpen, setResetModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetPin, setResetPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetError, setResetError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const teamInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flavorInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statusTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
            const typing = active === teamInputRef.current || active === flavorInputRef.current;
            if (!typing) refresh();
        }, 3500);
        return ()=>clearInterval(id);
    }, [
        refresh
    ]);
    const flash = (msg)=>{
        setStatus(msg);
        clearTimeout(statusTimer.current);
        statusTimer.current = setTimeout(()=>setStatus(null), 4500);
    };
    async function handleSeal() {
        const lines = flavorText.split("\n").map((s)=>s.trim()).filter(Boolean);
        if (lines.length < 2) {
            flash("Add at least two flavors first.");
            return;
        }
        const { ok, data } = await postJSON("/api/seal", {
            flavors: lines
        });
        if (!ok) {
            flash(data.error || "Couldn't seal the tin.");
            return;
        }
        flash("Tin sealed. Order is locked in.");
        refresh();
    }
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
        flash(`${team} claimed ${flavorName}.`);
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
                lineNumber: 262,
                columnNumber: 7
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12.5,
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
                lineNumber: 265,
                columnNumber: 9
            }, this),
            loading || !state ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: 13
                },
                children: "Opening the tin…"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 281,
                columnNumber: 9
            }, this) : !state.locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SetupScreen, {
                flavorText: flavorText,
                setFlavorText: setFlavorText,
                flavorInputRef: flavorInputRef,
                onSeal: handleSeal
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 285,
                columnNumber: 9
            }, this) : state.revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealScreen, {
                state: state,
                onReset: openResetModal
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 292,
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
                lineNumber: 294,
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
                lineNumber: 306,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
function SetupScreen({ flavorText, setFlavorText, flavorInputRef, onSeal }) {
    const count = flavorText.split("\n").map((s)=>s.trim()).filter(Boolean).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-heading",
                style: {
                    fontSize: 22,
                    marginBottom: 8
                },
                children: "Stock the shelf"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: 13.5,
                    marginBottom: 16
                },
                children: "One flavor per line, one for every team. Once sealed, each flavor locks to a secret, random draft slot nobody can see."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: flavorInputRef,
                value: flavorText,
                onChange: (e)=>setFlavorText(e.target.value),
                spellCheck: false,
                style: {
                    width: "100%",
                    minHeight: 220,
                    boxSizing: "border-box",
                    background: "var(--surface)",
                    border: "none",
                    borderRadius: "var(--radius)",
                    padding: "12px 14px",
                    fontSize: 13.5,
                    color: "var(--ink)",
                    lineHeight: 1.6,
                    resize: "vertical"
                }
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11.5,
                    color: "var(--ink-muted)",
                    marginTop: 8,
                    marginBottom: 20
                },
                children: [
                    count,
                    " flavor",
                    count === 1 ? "" : "s"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onSeal,
                style: {
                    width: "100%",
                    background: "var(--ink)",
                    color: "var(--heading)",
                    borderRadius: "var(--radius)",
                    padding: "14px 18px",
                    fontSize: 13,
                    fontWeight: 500
                },
                children: "Seal the tin"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
function ClaimScreen({ state, teamName, setTeamName, teamInputRef, onClaim, onReveal, onReset }) {
    const total = state.flavors.length;
    const claimedCount = Object.keys(state.claims).length;
    const myName = teamName.trim().toLowerCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-heading",
                style: {
                    fontSize: 24,
                    marginBottom: 8
                },
                children: "Pick your flavor"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: 13.5,
                    marginBottom: 22
                },
                children: "Type your team name, then tap an unclaimed flavor. It's yours for the draft — one flavor per team."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 394,
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
                    fontSize: 13.5,
                    color: "var(--ink)",
                    marginBottom: 20,
                    textAlign: "center"
                }
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 399,
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
                            fontSize: 12,
                            fontWeight: 500,
                            background: mine ? "var(--ink)" : taken ? "rgba(251,240,217,0.35)" : "var(--surface)",
                            color: mine ? "var(--heading)" : taken ? "rgba(36,40,59,0.4)" : "var(--ink)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: f.name
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 462,
                                columnNumber: 15
                            }, this),
                            taken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 400,
                                    opacity: 0.85
                                },
                                children: mine ? "You" : `Claimed — ${claim.team}`
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 464,
                                columnNumber: 17
                            }, this)
                        ]
                    }, f.id, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 433,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    fontSize: 11.5,
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
                lineNumber: 473,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onReveal,
                style: {
                    width: "100%",
                    background: "var(--ink)",
                    color: "var(--heading)",
                    borderRadius: "var(--radius)",
                    padding: "14px 18px",
                    fontSize: 13,
                    fontWeight: 500,
                    marginBottom: 14
                },
                children: "Reveal draft order"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 484,
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
                        fontSize: 11.5,
                        padding: "8px 10px"
                    },
                    children: "Reset tin"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 500,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 390,
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
                    fontSize: 24,
                    marginBottom: 26
                },
                children: "Draft order"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 531,
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
                                                fontSize: 17,
                                                fontWeight: 500,
                                                color: "var(--ink)"
                                            },
                                            children: r.pos
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 551,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14.5,
                                            fontWeight: 500,
                                            color: "var(--ink)",
                                            marginTop: 11
                                        },
                                        children: r.claim.team
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: "var(--ink-muted)",
                                            marginTop: 3
                                        },
                                        children: r.f.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 538,
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
                                lineNumber: 570,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.f.id, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 537,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            unclaimedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    fontSize: 11.5,
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
                lineNumber: 584,
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
                        fontSize: 11.5,
                        padding: "8px 10px"
                    },
                    children: "Reset tin"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 592,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 591,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 530,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0pvp12t._.js.map