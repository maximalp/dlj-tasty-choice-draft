"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { DEFAULT_FLAVORS } from "@/lib/flavors";
import { BASE_PATH } from "@/lib/basePath";

// Scales with --font-scale, which globals.css bumps up on desktop
// breakpoints. The DLJ heading stays a plain number so it's excluded.
const FS = (px) => `calc(${px}px * var(--font-scale, 1))`;

async function getState() {
  const res = await fetch(`${BASE_PATH}/api/state`, { cache: "no-store" });
  return res.json();
}

async function postJSON(path, body) {
  const res = await fetch(`${BASE_PATH}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body || {}),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

function Header() {
  return (
    <div style={{ marginBottom: 30 }}>
      <h1 className="brand-heading" style={{ fontSize: 46, marginBottom: 8 }}>
        <span style={{ color: "var(--ink)" }}>DLJ</span> 2026
      </h1>
      <p className="brand-tagline" style={{ fontSize: FS(13) }}>
        Tasty Choice Draft.
      </p>
    </div>
  );
}

function ResetModal({ pin, setPin, error, onCancel, onConfirm }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(20,16,8,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 22,
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: "var(--heading)",
          borderRadius: 14,
          padding: "24px 22px",
          width: "100%",
          maxWidth: 300,
        }}
      >
        <h3
          className="section-heading"
          style={{ fontSize: FS(18), color: "var(--ink)", marginBottom: 8 }}
        >
          Reset tin
        </h3>
        <p
          style={{
            fontSize: FS(11.5),
            color: "rgba(36,40,59,0.65)",
            textAlign: "center",
            lineHeight: 1.5,
            margin: "0 0 18px",
          }}
        >
          Enter the league PIN to continue. This clears every claim and the
          flavor list, and can't be undone.
        </p>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="PIN"
          autoFocus
          style={{
            width: "100%",
            boxSizing: "border-box",
            background: "#FBF0D9",
            border: "none",
            borderRadius: 8,
            padding: "10px 12px",
            fontSize: `max(16px, ${FS(13)})`,
            color: "var(--ink)",
            textAlign: "center",
            marginBottom: 8,
          }}
        />
        {error && (
          <p
            style={{
              fontSize: FS(11.5),
              color: "#B5533C",
              textAlign: "center",
              margin: "0 0 10px",
            }}
          >
            {error}
          </p>
        )}
        <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1,
              textAlign: "center",
              padding: 11,
              borderRadius: 8,
              border: "1px solid rgba(36,40,59,0.3)",
              background: "transparent",
              fontSize: FS(12),
              fontWeight: 500,
              color: "var(--ink)",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              flex: 1,
              textAlign: "center",
              padding: 11,
              borderRadius: 8,
              background: "#B5533C",
              fontSize: FS(12),
              fontWeight: 500,
              color: "var(--heading)",
              border: "none",
            }}
          >
            Confirm reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [resetPin, setResetPin] = useState("");
  const [resetError, setResetError] = useState(null);
  const teamInputRef = useRef(null);
  const statusTimer = useRef(null);
  const autoSealRef = useRef(false);
  const meowAudioRef = useRef(null);

  const playMeow = useCallback(() => {
    try {
      if (!meowAudioRef.current) {
        meowAudioRef.current = new Audio(`${BASE_PATH}/sounds/meow.mp3`);
      }
      const audio = meowAudioRef.current;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch {
      // ignore audio failures (e.g. autoplay policy) — claiming still works
    }
  }, []);

  const refresh = useCallback(async () => {
    try {
      const data = await getState();
      setState(data);
    } catch {
      // keep last known state on transient network errors
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    const id = setInterval(() => {
      const active = document.activeElement;
      const typing = active === teamInputRef.current;
      if (!typing) refresh();
    }, 3500);
    return () => clearInterval(id);
  }, [refresh]);

  // Jump to the top when the draft order appears, whether that's from
  // tapping "Reveal" or loading a page that was already revealed.
  useEffect(() => {
    if (state?.revealed) {
      window.scrollTo(0, 0);
    }
  }, [state?.revealed]);

  // Auto-seal with the hardcoded flavor list the first time anyone loads
  // the app before it's been sealed — no manual setup step.
  useEffect(() => {
    if (state && !state.locked && !autoSealRef.current) {
      autoSealRef.current = true;
      (async () => {
        const { ok, data } = await postJSON("/api/seal", {
          flavors: DEFAULT_FLAVORS,
        });
        if (!ok) {
          flash(data.error || "Couldn't seal automatically.");
        }
        refresh();
      })();
    }
  }, [state, refresh]);

  const flash = (msg) => {
    setStatus(msg);
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setStatus(null), 4500);
  };

  async function handleClaim(flavorId, flavorName) {
    const team = teamName.trim();
    if (!team) {
      flash("Type your team name first.");
      return;
    }
    const { ok, data } = await postJSON("/api/claim", { flavorId, team });
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
      pin: resetPin.trim(),
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

  return (
    <main
      style={{
        maxWidth: 480,
        margin: "0 auto",
        padding: "36px 20px 60px",
      }}
    >
      <Header />

      {status && (
        <div
          style={{
            fontSize: FS(12.5),
            textAlign: "center",
            color: "var(--ink)",
            background: "rgba(251,240,217,0.6)",
            borderRadius: "var(--radius)",
            padding: "9px 12px",
            marginBottom: 18,
          }}
        >
          {status}
        </div>
      )}

      {loading || !state ? (
        <p className="helper-text" style={{ fontSize: FS(13) }}>
          Opening the tin…
        </p>
      ) : !state.locked ? (
        <p className="helper-text" style={{ fontSize: FS(13) }}>
          Setting things up…
        </p>
      ) : state.revealed ? (
        <RevealScreen state={state} onReset={openResetModal} />
      ) : (
        <ClaimScreen
          state={state}
          teamName={teamName}
          setTeamName={setTeamName}
          teamInputRef={teamInputRef}
          onClaim={handleClaim}
          onReveal={handleReveal}
          onReset={openResetModal}
        />
      )}

      {resetModalOpen && (
        <ResetModal
          pin={resetPin}
          setPin={setResetPin}
          error={resetError}
          onCancel={() => setResetModalOpen(false)}
          onConfirm={confirmReset}
        />
      )}
    </main>
  );
}

function ClaimScreen({
  state,
  teamName,
  setTeamName,
  teamInputRef,
  onClaim,
  onReveal,
  onReset,
}) {
  const total = state.flavors.length;
  const claimedCount = Object.keys(state.claims).length;
  const myName = teamName.trim().toLowerCase();
  const allClaimed = total > 0 && claimedCount === total;

  return (
    <div>
      <h2 className="section-heading" style={{ fontSize: FS(24), marginBottom: 8 }}>
        Pick your flavor
      </h2>
      <p className="helper-text" style={{ fontSize: FS(13.5), marginBottom: 22 }}>
        Type your team name, then tap an unclaimed flavor. It's yours for the
        draft — one flavor per team.
      </p>

      <input
        ref={teamInputRef}
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Your team name"
        autoComplete="off"
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "var(--surface)",
          border: "none",
          borderRadius: "var(--radius)",
          padding: "12px 14px",
          fontSize: `max(16px, ${FS(13.5)})`,
          color: "var(--ink)",
          marginBottom: 20,
          textAlign: "center",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {state.flavors.map((f) => {
          const claim = state.claims[f.id];
          const mine = claim && claim.team.toLowerCase() === myName && myName.length > 0;
          const taken = Boolean(claim);
          return (
            <button
              key={f.id}
              onClick={() => !taken && onClaim(f.id, f.name)}
              disabled={taken && !mine}
              style={{
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
                background: mine
                  ? "var(--ink)"
                  : taken
                  ? "rgba(251,240,217,0.35)"
                  : "var(--surface)",
                color: mine
                  ? "var(--heading)"
                  : taken
                  ? "rgba(36,40,59,0.4)"
                  : "var(--ink)",
              }}
            >
              <span>{f.name}</span>
              {taken && (
                <span style={{ fontSize: FS(10), fontWeight: 400, opacity: 0.85 }}>
                  {mine ? "You" : `Claimed — ${claim.team}`}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: FS(11.5),
          color: "var(--ink-muted)",
          margin: "16px 0 24px",
        }}
      >
        {claimedCount} of {total} claimed
      </div>

      <button
        onClick={onReveal}
        disabled={!allClaimed}
        style={{
          width: "100%",
          background: allClaimed ? "var(--ink)" : "rgba(36,40,59,0.15)",
          color: allClaimed ? "var(--heading)" : "var(--ink-muted)",
          borderRadius: "var(--radius)",
          padding: "14px 18px",
          fontSize: FS(13),
          fontWeight: 500,
          marginBottom: 14,
          cursor: allClaimed ? "pointer" : "not-allowed",
        }}
      >
        Reveal draft order
      </button>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={onReset}
          style={{
            background: "transparent",
            color: "var(--ink-muted)",
            fontSize: FS(11.5),
            padding: "8px 10px",
          }}
        >
          Reset tin
        </button>
      </div>
    </div>
  );
}

function RevealScreen({ state, onReset }) {
  const rows = state.flavors
    .map((f) => ({
      f,
      pos: state.positions ? state.positions[f.id] : null,
      claim: state.claims[f.id],
    }))
    .filter((r) => r.claim && r.pos)
    .sort((a, b) => a.pos - b.pos);

  const unclaimedCount = state.flavors.length - rows.length;

  return (
    <div>
      <h2 className="section-heading" style={{ fontSize: FS(24), marginBottom: 26 }}>
        Draft order
      </h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {rows.map((r, i) => (
          <div key={r.f.id}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "var(--heading)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <span style={{ fontSize: FS(17), fontWeight: 500, color: "var(--ink)" }}>
                  {r.pos}
                </span>
              </div>
              <div
                style={{
                  fontSize: FS(14.5),
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginTop: 11,
                }}
              >
                {r.claim.team}
              </div>
              <div style={{ fontSize: FS(12), color: "var(--ink-muted)", marginTop: 3 }}>
                {r.f.name}
              </div>
            </div>
            {i < rows.length - 1 && (
              <div
                style={{
                  width: "33%",
                  height: 2,
                  background: "var(--heading)",
                  margin: "18px auto",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {unclaimedCount > 0 && (
        <p className="helper-text" style={{ fontSize: FS(11.5), marginTop: 26 }}>
          {unclaimedCount} flavor{unclaimedCount > 1 ? "s" : ""} went
          unclaimed and {unclaimedCount > 1 ? "aren't" : "isn't"} in the
          order above.
        </p>
      )}

      <div style={{ textAlign: "center", marginTop: 26 }}>
        <button
          onClick={onReset}
          style={{
            background: "transparent",
            color: "var(--ink-muted)",
            fontSize: FS(11.5),
            padding: "8px 10px",
          }}
        >
          Reset tin
        </button>
      </div>
    </div>
  );
}
