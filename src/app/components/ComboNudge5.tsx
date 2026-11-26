import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

import imgContainer from 'figma:asset/2b4a4c24360c91f8a409946f82a7aafcf8a0defc.png';
import imgContainer1 from 'figma:asset/4852de6281004c35e7f6336e1cea53fbdd811d49.png';
import imgGenerative from 'figma:asset/bc4c8fcbde2845056278f2ec63820ce944bab2a2.png';
import imgGenerative1 from 'figma:asset/d9e2205c99b1effb1db52efd7656c4d70fc30aa2.png';

// ─── Outline CTA button ───────────────────────────────────────────────────────

function OutlineBtn({ label }: { label: string }) {
  return (
    <div className="w-full relative rounded-[8px] bg-[#ecf2ff]">
      <button className="flex items-center justify-center gap-[4px] w-full px-[16px] py-[8px] rounded-[8px] text-[#0647d9] text-[12px] font-normal hover:bg-[#e0ebff] transition-colors">
        {label}
      </button>
      <div className="absolute inset-0 rounded-[8px] border border-[#0647d9] pointer-events-none" />
    </div>
  );
}

// ─── CircleProgress ───────────────────────────────────────────────────────────

function CircleProgress() {
  const r = 28;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0 size-[72px]">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} fill="none" stroke="#E5EBF5" strokeWidth="5" />
        <motion.circle
          cx="36" cy="36" r={r}
          fill="none" stroke="#0647D9" strokeWidth="5"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ * 0.2 }}
          transition={{ duration: 1.3, ease: 'easeOut', delay: 0.15 }}
          strokeLinecap="round"
          transform="rotate(-90 36 36)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold text-[14px] text-[#0647d9] leading-none">80%</span>
        <span className="text-[#505964] text-[10px] leading-none mt-[2px]">live</span>
      </div>
    </div>
  );
}

// ─── Step content panels ──────────────────────────────────────────────────────

function DetectContent() {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col items-center gap-[12px]">
        <CircleProgress />
        <p className="text-[#0e1215] text-[18px] font-semibold leading-[22px] text-center">AI Speed Detection</p>
        <p className="text-[#505964] text-[13px] leading-[18px] text-center">
          80% of detections go live within minutes of disclosure — no scan window, no waiting.
        </p>
      </div>
      <OutlineBtn label="Turn On Live Detection" />
    </div>
  );
}

function PrioritizeContent() {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[12px]">
        <p className="text-[#0e1215] text-[18px] font-semibold leading-[22px] text-center">Attack-Path Priority</p>
        <div className="bg-[#f3f7ff] rounded-[12px] p-[14px] flex flex-col gap-[8px]">
          <div className="flex items-start gap-[8px]">
            <div className="size-[6px] rounded-full bg-[#0647d9] shrink-0 mt-[5px]" />
            <p className="text-[#0e1215] text-[12px] font-semibold leading-[16px]">24 Paths — 1 Choke Point Fix drops risk 42%</p>
          </div>
          <div className="flex items-start gap-[8px]">
            <div className="size-[6px] rounded-full bg-[#0647d9] shrink-0 mt-[5px]" />
            <p className="text-[#0e1215] text-[12px] leading-[16px]">
              <span className="font-semibold">TruConfirm</span> proves 80 exploitable vulns on internet-facing assets
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <OutlineBtn label="Analyze Attack Paths" />
        <OutlineBtn label="Show Exploitable Findings" />
      </div>
    </div>
  );
}

function RemediateContent() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-[#0e1215] text-[18px] font-semibold leading-[22px] text-center">Autonomous Remediation</p>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between px-[4px]">
          <div className="flex flex-col items-center gap-[2px]">
            <span className="text-[#d81900] text-[22px] font-bold leading-none">47d</span>
            <span className="text-[#505964] text-[11px] leading-none">MTTR now</span>
          </div>
          <div className="text-[#505964] text-[20px] font-light">→</div>
          <div className="flex flex-col items-center gap-[2px]">
            <span className="text-[#008a27] text-[22px] font-bold leading-none">~3d</span>
            <span className="text-[#505964] text-[11px] leading-none">with Agent Sara</span>
          </div>
        </div>
        <div className="bg-[#f7f8f9] h-[12px] rounded-full overflow-hidden relative w-full">
          <div className="bg-[#d81900] absolute inset-0 rounded-full" />
          <div className="bg-[#008a27] absolute left-0 top-0 h-full w-[35px] rounded-full" />
        </div>
        <p className="text-[#505964] text-[12px] leading-[16px] text-center">
          AI patch waves — zero touch, no reboots, reliability scored.
        </p>
      </div>
      <OutlineBtn label="Build Remediation Waves" />
    </div>
  );
}

// ─── Step definitions ─────────────────────────────────────────────────────────

const STEPS = [
  { letter: 'A', title: 'Detect',     subtitle: 'Scanless, live, at AI-speed',                    agentBg: imgGenerative,  agentName: 'Agent Insta', Content: DetectContent },
  { letter: 'B', title: 'Prioritize', subtitle: 'Attack paths & MITRE ATT&CK, exploit validation', agentBg: imgGenerative1, agentName: 'Agent Val',   Content: PrioritizeContent },
  { letter: 'C', title: 'Remediate',  subtitle: 'Reliability-scored waves that keep systems up',   agentBg: imgGenerative,  agentName: 'Agent Sara',  Content: RemediateContent },
];

const CARD_WIDTH = 260;
const CARD_HEIGHT = 500;

// ─── Portrait step card ───────────────────────────────────────────────────────

function StepCard({ step }: { step: typeof STEPS[number] }) {
  return (
    <div
      className="bg-white flex flex-col rounded-[20px] overflow-hidden flex-shrink-0"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        boxShadow: '0px 0px 4px 0px rgba(3,38,115,0.08), 2px 8px 24px 0px rgba(42,46,50,0.14)',
        border: '1px solid #d9e4ff',
      }}
    >
      {/* Card top: texture bg + badge + title + agent chip stacked */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img alt="" src={imgContainer1} className="absolute inset-0 max-w-none object-cover size-full pointer-events-none" />
        <div className="absolute inset-0 border-b border-[#d9e4ff] pointer-events-none" />
        <div className="relative flex flex-col items-center gap-[10px] px-[20px] pt-[20px] pb-[16px]">
          {/* Letter badge */}
          <div className="rounded-[10px] size-[36px] flex items-center justify-center bg-[#0647d9]">
            <span className="text-[16px] font-semibold text-white leading-none">{step.letter}</span>
          </div>
          {/* Title + subtitle */}
          <div className="flex flex-col items-center gap-[4px]">
            <span className="text-[18px] font-semibold leading-[22px] text-[#0e1215]">{step.title}</span>
            <span className="text-[#505964] text-[11px] font-medium leading-[14px] text-center">{step.subtitle}</span>
          </div>
          {/* Agent chip — inline centered */}
          <div className="relative flex gap-[10px] items-center px-[12px] py-[6px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px]">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px]">
              <div className="absolute bg-white inset-0 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px]" />
              <img alt="" className="absolute max-w-none object-cover size-full rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px]" src={step.agentBg} />
            </div>
            <div aria-hidden className="absolute border-[#d9e4ff] border-b-2 border-l-2 border-r-2 border-solid border-t-[0.5px] inset-[-0.5px_-2px_-2px_-2px] pointer-events-none rounded-bl-[12px] rounded-br-[12px] rounded-tl-[1.5px] rounded-tr-[1.5px]" />
            <div className="relative rounded-bl-[10px] rounded-tr-[1px] shrink-0 size-[36px] overflow-clip">
              <img alt={step.agentName} className="absolute inset-0 max-w-none object-cover size-full" src={step.agentBg} />
            </div>
            <div className="relative flex flex-col items-start justify-center whitespace-nowrap">
              <p className="font-normal text-[#505964] text-[10px] tracking-[0.05px]">With</p>
              <p className="font-semibold text-[#0e1215] text-[12px] tracking-[0.06px]">{step.agentName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="flex-1 bg-white px-[20px] py-[20px]">
        <step.Content />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

// center-to-center distance = card width + gap between cards
const SIDE_OFFSET = CARD_WIDTH + 20;

export default function ComboNudge5() {
  const [activeIndex, setActiveIndex] = useState(0);

  const go = (next: number) => setActiveIndex((next + STEPS.length) % STEPS.length);

  // Map each card to its position slot relative to active: -1, 0, +1
  const getSlot = (i: number) => {
    const total = STEPS.length;
    const diff = ((i - activeIndex) % total + total) % total;
    // diff 0 = center, 1 = right, 2 = left (wrap)
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    return -1;
  };

  const getCardMotion = (slot: number) => ({
    x: slot * SIDE_OFFSET,
    scale: 1,
    opacity: 1,
    zIndex: slot === 0 ? 10 : 5,
  });

  return (
    <div
      className="flex flex-col relative"
      style={{
        width: 640,
        borderRadius: 24,
        boxShadow: '0px 0px 4px 0px rgba(3,38,115,0.12), 1px 8px 16px 0px rgba(42,46,50,0.16)',
        fontFamily: "'Noto Sans', sans-serif",
      }}
    >
      {/* Close button */}
      <button
        className="absolute bg-white rounded-[20px] flex items-center justify-center p-[6px] z-20 hover:bg-gray-50 transition-colors"
        style={{ right: -11, top: -14, boxShadow: '0px 0px 2px 0px rgba(3,38,115,0.04), 0px 4px 12px 0px rgba(42,46,50,0.12)' }}
      >
        <X size={14} color="#0647d9" strokeWidth={2.5} />
      </button>

      {/* Header */}
      <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-white" />
          <img alt="" src={imgContainer} className="absolute inset-0 max-w-none object-cover size-full" />
          <div className="absolute inset-0 bg-[#f3f7ff]" />
        </div>
        <div className="absolute inset-0 border-b border-[#d9e4ff] pointer-events-none" />
        <div className="relative flex flex-col items-start pb-[21px] pt-[20px] px-[20px]">
          <p className="text-[#0647d9] text-[10px] font-medium leading-[15px] tracking-[0.05px]">
            Enterprise TruRisk™ · Autonomous Operations
          </p>
          <p className="text-[#0e1215] text-[20px] font-semibold leading-[24px] tracking-[0.1px] mt-[8px] w-full">
            Run your cyber-risk operations autonomously, at AI-speed. Pick a play; the right agent runs it.
          </p>
          <div className="flex flex-wrap gap-[8px] mt-[20px]">
            {[
              { value: '400K', label: 'findings' },
              { value: '70',   label: 'Internet facing' },
              { value: '47d',  label: 'MTTR' },
              { value: '13K',  label: 'CISA KEV' },
              { value: '557',  label: 'TruRisk ≥700' },
            ].map(c => (
              <div key={c.label} className="bg-white flex items-center gap-[4px] min-h-[28px] px-[12px] py-[6px] rounded-[20px] relative shrink-0">
                <div className="absolute inset-0 rounded-[20px] border border-[#cfd5dc] pointer-events-none" />
                <span className="font-semibold text-[#0e1215] text-[14px] leading-[16px] tracking-[0.07px] whitespace-nowrap">{c.value}</span>
                <span className="text-[#0e1215] text-[12px] leading-[16px] tracking-[0.06px] whitespace-nowrap">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3-up portrait card carousel */}
      <div
        className="bg-white overflow-hidden py-[28px]"
        style={{ borderTop: '1px solid #d9e4ff' }}
      >
        {/* Track is centered; side cards overflow and get clipped by parent */}
        <div className="relative mx-auto" style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}>
          {STEPS.map((step, i) => {
            const slot = getSlot(i);
            const motionProps = getCardMotion(slot);
            return (
              <motion.div
                key={step.letter}
                animate={motionProps}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                style={{ position: 'absolute', top: 0, left: 0 }}
                onClick={() => slot !== 0 && go(i)}
                className={slot !== 0 ? 'cursor-pointer' : ''}
              >
                <StepCard step={step} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer with nav + CTA */}
      <div className="rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full" style={{ backgroundColor: '#f3f7ff', borderTop: '1px solid #d9e4ff' }}>
        <div className="flex items-center justify-between px-[20px] py-[16px]">
          <div className="flex items-center gap-[12px]">
            <button
              onClick={() => go(activeIndex - 1)}
              className="flex items-center justify-center size-[28px] rounded-full border border-[#d9e4ff] bg-white hover:bg-[#f0f5ff] transition-colors"
            >
              <ChevronLeft size={14} color="#0647d9" />
            </button>
            <div className="flex items-center gap-[4px]">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="h-[4px] rounded-full transition-all duration-300"
                  style={{ width: i === activeIndex ? 32 : 16, backgroundColor: i === activeIndex ? '#0647d9' : '#cfd5dc' }}
                />
              ))}
            </div>
            <button
              onClick={() => go(activeIndex + 1)}
              className="flex items-center justify-center size-[28px] rounded-full border border-[#d9e4ff] bg-white hover:bg-[#f0f5ff] transition-colors"
            >
              <ChevronRight size={14} color="#0647d9" />
            </button>
          </div>

          <button className="bg-[#0647d9] text-white text-[14px] font-normal leading-[20px] px-[16px] py-[8px] rounded-[8px] flex items-center gap-[6px] hover:opacity-90 transition-opacity whitespace-nowrap">
            Talk To My TAM
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
