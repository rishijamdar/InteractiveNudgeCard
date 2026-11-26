import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

import imgContainer from '../../imports/ComboNudge-2/82d8af70685a95b53ede789418a5ff23a6ace797.png';
import { Generative, Generative1, Generative2 } from '../../imports/ComboNudge-3/index';

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

// ─── CircleProgress (56px, matching Container11/CircleProgress in Figma) ─────

function CircleProgress() {
  const r = 22;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0 size-[56px]">
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={r} fill="none" stroke="#CFD5DC" strokeWidth="4.5" />
        <motion.circle
          cx="28" cy="28" r={r}
          fill="none" stroke="#0647D9" strokeWidth="4.5"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ * 0.2 }}
          transition={{ duration: 1.3, ease: 'easeOut', delay: 0.15 }}
          strokeLinecap="round"
          transform="rotate(-90 28 28)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold text-[12px] text-[#0647d9] leading-none">80%</span>
        <span className="text-[#505964] text-[10px] leading-none mt-[2px]">live</span>
      </div>
    </div>
  );
}

// ─── Step content panels ──────────────────────────────────────────────────────

function DetectContent() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      <p className="font-medium leading-[20px] text-[#0e1215] text-[16px] tracking-[0.08px] whitespace-nowrap">AI Speed Detection</p>
      <CircleProgress />
      <p className="font-medium leading-[18px] text-[#0e1215] text-[14px] tracking-[0.07px]">
        80% of detections live within minutes of disclosure, no scan window.
      </p>
      <OutlineBtn label="Turn On Live Detection" />
    </div>
  );
}

function PrioritizeContent() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <div className="flex gap-[20px] items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-[12px]">
          <p className="font-medium leading-[20px] text-[#0e1215] text-[16px] tracking-[0.08px] whitespace-nowrap">Attack-Path Priority</p>
          <p className="font-medium leading-[18px] text-[#0e1215] text-[14px] tracking-[0.07px] w-[252px]">
            24 Paths, 1 Choke Point Fix, Breaks 3 and Drops Rescore 42%
          </p>
          <OutlineBtn label="Analyze Attack Paths" />
        </div>
        <div className="self-stretch w-px bg-[#E7EAED] shrink-0" />
        <div className="flex-1 min-w-0 flex flex-col gap-[12px]">
          <p className="font-medium leading-[20px] text-[#0e1215] text-[16px] tracking-[0.08px] whitespace-nowrap">Exploit Validation</p>
          <p className="font-medium leading-[18px] text-[#0e1215] text-[14px] tracking-[0.07px] w-[252px]">
            TruConfirm Proves the 80 exploitable vulns proven on internet-facing assets
          </p>
          <OutlineBtn label="Show Exploitable Findings" />
        </div>
      </div>
    </div>
  );
}

function RemediateContent() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <p className="font-medium leading-[20px] text-[#0e1215] text-[16px] tracking-[0.08px] whitespace-nowrap">Autonomous Remediation</p>
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <span className="font-medium leading-[15px] text-[#0e1215] text-[12px] tracking-[0.06px]">With Agent Sara</span>
            <span className="font-semibold leading-[16px] text-[#008a27] text-[14px] tracking-[0.07px]">~3 days</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-medium leading-[15px] text-[#0e1215] text-[12px] tracking-[0.06px]">Now</span>
            <span className="font-semibold leading-[16px] text-[#d81900] text-[14px] tracking-[0.07px]">47 days</span>
          </div>
        </div>
        <div className="bg-[#f7f8f9] h-[12px] rounded-full overflow-hidden relative w-full">
          <div className="bg-[#d81900] absolute inset-0 rounded-full" />
          <div className="bg-[#008a27] absolute left-0 top-0 h-full w-[35px] rounded-full" />
        </div>
      </div>
      <p className="font-normal leading-[16px] text-[#0e1215] text-[12px] tracking-[0.06px]">
        Cut MTTR to under 3 days with AI patch reliability scored waves, zero touch, no reboots.
      </p>
      <OutlineBtn label="Build Remediation Waves" />
    </div>
  );
}

// ─── Step definitions ─────────────────────────────────────────────────────────

type StepKey = 'detect' | 'prioritize' | 'remediate';

const STEPS: {
  key: StepKey;
  letter: string;
  title: string;
  subtitle: string;
  AgentChip: React.ComponentType;
  Content: React.ComponentType;
}[] = [
  { key: 'detect',     letter: 'A', title: 'AI Speed Detection',    subtitle: 'Scanless, live,\nat AI-speed',                    AgentChip: Generative,  Content: DetectContent },
  { key: 'prioritize', letter: 'B', title: 'Hyper prioritization',   subtitle: 'Attack paths & MITRE ATT&CK,\nexploit validation', AgentChip: Generative1, Content: PrioritizeContent },
  { key: 'remediate',  letter: 'C', title: 'Autonomous Remediation', subtitle: 'Reliability-scored waves that\nkeep systems up',   AgentChip: Generative2, Content: RemediateContent },
];

const CONTENT_HEIGHT = 192;

// ─── Main component ───────────────────────────────────────────────────────────

export default function ComboNudge3() {
  const [activeStep, setActiveStep] = useState<StepKey>('detect');
  const [direction, setDirection] = useState(0);

  const handleClick = (key: StepKey) => {
    const oldIdx = STEPS.findIndex(s => s.key === activeStep);
    const newIdx = STEPS.findIndex(s => s.key === key);
    setDirection(newIdx > oldIdx ? 1 : -1);
    setActiveStep(key);
  };

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
        className="absolute bg-white rounded-[20px] flex items-center justify-center p-[8px] z-20 hover:bg-gray-50 transition-colors"
        style={{ right: -11, top: -14, boxShadow: '0px 0px 2px 0px rgba(3,38,115,0.04), 0px 4px 12px 0px rgba(42,46,50,0.12)' }}
      >
        <X size={20} color="#0647d9" strokeWidth={2} />
      </button>

      {/* Header */}
      <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-white" />
          <img alt="" src={imgContainer} className="absolute inset-0 max-w-none object-cover size-full" />
          <div className="absolute inset-0 bg-[#f3f7ff]" />
        </div>
        <div className="absolute inset-0 border-b border-[#d9e4ff] pointer-events-none" />
        <div className="relative flex flex-col items-start pb-[20px] pt-[20px] px-[20px]">
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

      {/* 3 card headers — matching Container4 (active) / Container8 (inactive) styling */}
      <div className="bg-white flex flex-row">
        {STEPS.map((step, i) => {
          const isActive = activeStep === step.key;
          return (
            <div
              key={step.key}
              className="relative flex-[1_0_0] min-w-px cursor-pointer"
              onClick={() => handleClick(step.key)}
              style={{ backgroundColor: '#f3f7ff' }}
            >
              <div
                aria-hidden
                className={`absolute inset-0 pointer-events-none border border-solid ${isActive ? 'border-[#0647d9]' : 'border-[#d9e4ff]'}`}
              />
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[17px] py-[13px] relative size-full">
                  {/* Letter badge + title */}
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    <div
                      className="rounded-[8px] size-[24px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: isActive ? '#0647d9' : '#d9e4ff' }}
                    >
                      <span
                        className="text-[12px] font-semibold leading-[15px] tracking-[0.06px]"
                        style={{ color: isActive ? '#fff' : '#0647d9' }}
                      >
                        {step.letter}
                      </span>
                    </div>
                    <p
                      className="text-[14px] font-semibold leading-[20px] tracking-[0.07px] whitespace-nowrap"
                      style={{ color: isActive ? '#0e1215' : '#505964' }}
                    >
                      {step.title}
                    </p>
                  </div>
                  {/* Subtitle */}
                  <p className="text-[#505964] text-[12px] font-medium leading-[15px] tracking-[0.06px] whitespace-pre">
                    {step.subtitle}
                  </p>
                  {/* Agent chip — from Figma import, absolutely positioned at top:-4px */}
                  <step.AgentChip />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-width content panel — h-[192px] matching Container11 */}
      <div
        style={{ height: CONTENT_HEIGHT, overflow: 'hidden', borderTop: '1px solid #d9e4ff', position: 'relative' }}
        className="bg-white w-full"
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {STEPS.map(step => step.key === activeStep ? (
            <motion.div
              key={step.key}
              custom={direction}
              initial={{ x: direction * 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -80, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              style={{ position: 'absolute', inset: 0 }}
              className="bg-white px-[20px] py-[20px] flex flex-col justify-center"
            >
              <step.Content />
            </motion.div>
          ) : null)}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div
        className="rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full"
        style={{ backgroundColor: '#f3f7ff', borderTop: '1px solid #d9e4ff' }}
      >
        <div className="flex items-center justify-between px-[20px] py-[20px]">
          <span className="text-[#0e1215] text-[12px] font-medium leading-[16px] tracking-[0.06px]">
            Powered by Enterprise TruRisk™ agents
          </span>
          <button className="bg-[#0647d9] text-white text-[12px] font-normal leading-[15px] px-[16px] py-[8px] rounded-[8px] flex items-center gap-[4px] hover:opacity-90 transition-opacity whitespace-nowrap">
            Talk To My TAM
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
