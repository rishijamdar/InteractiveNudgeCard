import { useState, useRef, useEffect, useCallback } from "react";

const imgThumb = "./image.png"; // placeholder, swapping below

const S = 200;

const FACE_TARGETS = [
  { x: 0,   y: 0  },
  { x: 0,   y: 90 },
  { x: 90, y: 0  },
];

const FACE_TRANSFORMS = [
  `translateZ(${S/2}px)`,
  `rotateY(-90deg) translateZ(${S/2}px)`,
  `rotateX(-90deg) translateZ(${S/2}px)`,
];

function lerp(a, b, t) { return a + (b - a) * t; }

const PlayIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

function MiniCard() {
  return (
    <div style={{ boxSizing: "border-box", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", background: "#fff" }}>
      <div style={{ position: "relative", height: 90, overflow: "hidden", flexShrink: 0 }}>
        <img src={imgThumb} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(19,19,19,0.3)", borderRadius: 40, padding: 7, display: "flex" }}>
          <PlayIcon size={18} />
        </div>
      </div>
      <div style={{ margin: "6px 8px 0", background: "rgba(255,229,227,0.5)", border: "0.5px solid #fec2bc", borderRadius: 8, padding: "5px 7px", textAlign: "center" }}>
        <div style={{ fontSize: 8.5, fontWeight: 600, color: "#0e1215", lineHeight: 1.3 }}>Your MTTR is</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#d81900", lineHeight: 1.2 }}>1.5x slower</div>
        <div style={{ fontSize: 8, fontWeight: 600, color: "#0e1215", lineHeight: 1.3 }}>than Qualys TruRisk Eliminate customers.</div>
      </div>
      <div style={{ margin: "5px 8px 8px", padding: "5px 0", background: "#0647d9", color: "#fff", borderRadius: 6, fontSize: 8.5, fontWeight: 500, textAlign: "center" }}>Activate Trial →</div>
    </div>
  );
}

function FullCard() {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #9cbaff",
      borderRadius: 16,
      overflow: "hidden",
      width: 350,
      boxSizing: "border-box",
      boxShadow: "0px 0px 15px rgba(0,0,0,0.12), 0px 5.2px 6.9px rgba(0,0,0,0.04), 0px 2px 2.7px rgba(0,0,0,0.03)",
      fontFamily: "'Noto Sans', system-ui, sans-serif",
    }}>
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src={imgThumb} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          background: "rgba(19,19,19,0.3)",
          borderRadius: 50, padding: 20,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        }}>
          <PlayIcon size={32} />
        </div>
      </div>
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{
          background: "rgba(255,229,227,0.5)",
          border: "1px solid #fec2bc",
          borderRadius: 20,
          padding: "20px",
          textAlign: "center",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#0e1215", lineHeight: "24px", letterSpacing: "0.1px" }}>Your MTTR is</div>
          <div>
            <span style={{ fontSize: 32, fontWeight: 600, color: "#d81900", lineHeight: "40px", letterSpacing: "-0.32px" }}>1.5</span>
            <span style={{ fontSize: 28, fontWeight: 500, color: "#d81900", lineHeight: "36px", letterSpacing: "-0.28px" }}>x slower</span>
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#0e1215", lineHeight: "24px", letterSpacing: "0.1px" }}>
            than Qualys<br />TruRisk Eliminate customers.
          </div>
        </div>
        <div style={{ fontSize: 14, color: "#505964", lineHeight: "22px", textAlign: "center", letterSpacing: "0.08px" }}>
          Watch above video and share the report with your IT teams to optimize your patching process.
        </div>
        <button style={{
          width: "100%", padding: "12px 20px",
          background: "#0647d9", color: "#fff",
          border: "none", borderRadius: 12,
          fontSize: 14, fontWeight: 400, cursor: "pointer",
          letterSpacing: "0.08px", lineHeight: "20px",
          fontFamily: "inherit", boxSizing: "border-box",
        }}>
          Activate TruRisk Eliminate Trial
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRot = useRef({ x: 30, y: 45 });
  const currentRot = useRef({ x: 30, y: 45 });
  const [displayRot, setDisplayRot] = useState({ x: 30, y: 45 });
  const [phase, setPhase] = useState("idle");
  const [focused, setFocused] = useState(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    let running = true;
    const tick = () => {
      if (!running) return;
      currentRot.current.x = lerp(currentRot.current.x, mouseRot.current.x, 0.07);
      currentRot.current.y = lerp(currentRot.current.y, mouseRot.current.y, 0.07);
      setDisplayRot({ x: currentRot.current.x, y: currentRot.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { running = false; cancelAnimationFrame(rafRef.current); };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (phase !== "idle") return;
    const rect = sceneRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseRot.current = { x: 30 - dy * 18, y: 45 + dx * 22 };
  }, [phase]);

  const handleMouseLeave = useCallback(() => {
    if (phase !== "idle") return;
    mouseRot.current = { x: 30, y: 45 };
  }, [phase]);

  const handleFaceClick = (i) => {
    if (phase === "rotating") return;
    if (i === focused && showCard) return;
    setFocused(i);
    setPhase("rotating");
    mouseRot.current = FACE_TARGETS[i];
    if (showCard) {
      setShowCard(false);
      setTimeout(() => setShowCard(true), 500);
      setTimeout(() => setPhase("focused"), 550);
    } else {
      setTimeout(() => setShowCard(true), 500);
      setTimeout(() => setPhase("focused"), 550);
    }
  };

  const handleBack = () => {
    setShowCard(false);
    setPhase("rotating");
    mouseRot.current = { x: 30, y: 45 };
    setTimeout(() => { setFocused(null); setPhase("idle"); }, 480);
  };

  const rot = phase === "idle" ? displayRot : focused !== null ? FACE_TARGETS[focused] : { x: 30, y: 45 };

  return (
    <div style={{ fontFamily: "'Noto Sans', system-ui, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 16px 32px" }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: "#0e1215", marginBottom: 4 }}>Upgrade recommendations</div>
      <div style={{ fontSize: 12, color: "#888", marginBottom: 36, textAlign: "center" }}>
        {phase === "idle" ? "Move to explore · Click a face to open" : "Click a face to switch"}
      </div>

      <div style={{ position: "relative", width: 320, height: 580, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 40 }}>
        {/* Cube */}
        <div
          ref={sceneRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 320,
            display: "flex", alignItems: "center", justifyContent: "center",
            perspective: 900,
            cursor: phase === "idle" ? "grab" : "default",
            opacity: showCard ? 0 : 1,
            transition: "opacity 0.3s ease",
            pointerEvents: showCard ? "none" : "auto",
          }}
        >
          <div style={{
            width: S, height: S, position: "relative",
            transformStyle: "preserve-3d",
            transition: phase === "idle" ? "none" : "transform 0.55s cubic-bezier(.22,1,.36,1)",
            transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
            willChange: "transform",
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} onClick={() => handleFaceClick(i)} style={{
                position: "absolute", width: S, height: S,
                backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
                transform: FACE_TRANSFORMS[i],
                borderRadius: 12, overflow: "hidden", cursor: "pointer",
                border: "1px solid #9cbaff",
              }}>
                <MiniCard />
              </div>
            ))}
            {[
              `rotateY(90deg) translateZ(${S/2}px)`,
              `rotateX(90deg) translateZ(${S/2}px)`,
              `rotateY(180deg) translateZ(${S/2}px)`,
            ].map((t, i) => (
              <div key={i} style={{
                position: "absolute", width: S, height: S,
                backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
                transform: t, background: ["#dce8ff","#c8d9ff","#eef3ff"][i], borderRadius: 12,
              }} />
            ))}
          </div>
        </div>

        {/* Flat card */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          display: "flex", alignItems: "flex-start", justifyContent: "center",
          opacity: showCard ? 1 : 0,
          transform: showCard ? "scale(1)" : "scale(0.93)",
          transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(.22,1,.36,1)",
          pointerEvents: showCard ? "auto" : "none",
        }}>
          <FullCard />
        </div>
      </div>

      {/* Controls */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 24, width: 320, height: 32 }}>
        <div style={{
          position: "absolute", left: 0,
          opacity: showCard ? 1 : 0,
          pointerEvents: showCard ? "auto" : "none",
          transition: "opacity 0.2s",
        }}>
          <button onClick={handleBack} style={{
            width: 32, height: 32, borderRadius: "50%",
            border: "0.5px solid #ddd", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          background: "#fff", border: "0.5px solid #e0e0e0",
          borderRadius: 99, padding: "0 12px", height: 32, width: 96,
        }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => handleFaceClick(i)} style={{
              width: showCard && focused === i ? 48 : 8,
              height: 8, borderRadius: 99, border: "none",
              background: showCard && focused === i ? "#0647d9" : "#ccc",
              cursor: "pointer", padding: 0, flexShrink: 0,
              transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
