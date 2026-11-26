import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ChevronDown } from 'lucide-react';

import imgContainer from 'figma:asset/2b4a4c24360c91f8a409946f82a7aafcf8a0defc.png';
import imgContainer1 from 'figma:asset/4852de6281004c35e7f6336e1cea53fbdd811d49.png';
import imgGenerative from 'figma:asset/bc4c8fcbde2845056278f2ec63820ce944bab2a2.png';
import imgGenerative1 from 'figma:asset/d9e2205c99b1effb1db52efd7656c4d70fc30aa2.png';

function AgentChip({ bg, name }: { bg: string; name: string }) {
  return (
    <div className="relative content-stretch flex gap-[8px] items-center pr-[10px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px] shrink-0 w-[120px] self-start" style={{ marginTop: '-12px' }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px]">
        <div className="absolute bg-white inset-0 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-bl-[10px] rounded-br-[10px] rounded-tl-[1px] rounded-tr-[1px] size-full" src={bg} />
      </div>
      <div aria-hidden className="absolute border-[#d9e4ff] border-b-2 border-l-2 border-r-2 border-solid border-t-[0.5px] inset-[-0.5px_-2px_-2px_-2px] pointer-events-none rounded-bl-[12px] rounded-br-[12px] rounded-tl-[1.5px] rounded-tr-[1.5px]" />
      <div className="relative rounded-bl-[10px] rounded-tr-[1px] shrink-0 size-[32px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <img alt={name} className="absolute inset-0 max-w-none object-cover size-full" src={bg} />
        </div>
        <div aria-hidden className="absolute border-b-[1.25px] border-l-[1.25px] border-solid border-t-[1.25px] border-white inset-0 pointer-events-none rounded-bl-[10px] rounded-tr-[1px]" />
      </div>
      <div className="relative flex flex-col items-start justify-center leading-[13px] whitespace-nowrap">
        <p className="font-normal mb-[-2px] text-[#505964] text-[9px] tracking-[0.05px]">With</p>
        <p className="font-semibold text-[#0e1215] text-[11px] tracking-[0.06px]">{name}</p>
      </div>
    </div>
  );
}

function OutlineBtn({ label }: { label: string }) {
  return (
    <div className="w-full relative rounded-[8px] bg-[#ecf2ff]">
      <button className="flex items-center justify-center gap-[4px] w-full px-[12px] py-[7px] rounded-[8px] text-[#0647d9] text-[11px] font-normal hover:bg-[#e0ebff] transition-colors">
        {label}
      </button>
      <div className="absolute inset-0 rounded-[8px] border border-[#0647d9] pointer-events-none" />
    </div>
  );
}

function CircleProgress() {
  const r = 18;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={r} fill="none" stroke="#CFD5DC" strokeWidth="4" />
        <motion.circle
          cx="24" cy="24" r={r}
          fill="none" stroke="#0647D9" strokeWidth="4"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ * 0.2 }}
          transition={{ duration: 1.3, ease: 'easeOut', delay: 0.15 }}
          strokeLinecap="round"
          transform="rotate(-90 24 24)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold text-[11px] text-[#0647d9] leading-none">80%</span>
        <span className="text-[#505964] text-[9px] leading-none mt-[2px]">live</span>
      </div>
    </div>
  );
}

function DetectContent() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex gap-[10px] items-center">
        <CircleProgress />
        <p className="text-[#0e1215] text-[11px] font-medium leading-[15px]">
          80% of detections live within minutes of disclosure, no scan window.
        </p>
      </div>
      <OutlineBtn label="Turn On Live Detection" />
    </div>
  );
}

function PrioritizeContent() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[#0e1215] text-[12px] font-semibold leading-[15px]">
          24 Paths, 1 Choke Point Fix — drops rescore by 42%
        </p>
        <p className="text-[#0e1215] text-[11px] leading-[14px]">
          <span className="font-semibold">TruConfirm</span> proves 80 exploitable vulns on internet-facing assets
        </p>
      </div>
      <div className="flex gap-[8px]">
        <OutlineBtn label="Attack Paths" />
        <OutlineBtn label="Exploitable Findings" />
      </div>
    </div>
  );
}

function RemediateContent() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <span className="text-[#0e1215] text-[11px] font-medium leading-[14px]">With Agent Sara</span>
            <span className="text-[#008a27] text-[12px] font-semibold leading-[15px]">~3 days</span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="text-[#0e1215] text-[11px] font-medium leading-[14px]">Now</span>
            <span className="text-[#d81900] text-[12px] font-semibold leading-[15px]">47 days</span>
          </div>
        </div>
        <div className="bg-[#f7f8f9] h-[10px] rounded-full overflow-hidden relative w-full">
          <div className="bg-[#d81900] absolute inset-0 rounded-full" />
          <div className="bg-[#008a27] absolute left-0 top-0 h-full w-[28px] rounded-full" />
        </div>
      </div>
      <p className="text-[#0e1215] text-[11px] font-normal leading-[15px]">
        Cut MTTR to under 3 days with AI patch reliability scored waves, zero touch, no reboots.
      </p>
      <OutlineBtn label="Build Remediation Waves" />
    </div>
  );
}

type StepKey = 'detect' | 'prioritize' | 'remediate';

const STEPS: {
  key: StepKey;
  letter: string;
  title: string;
  subtitle: string;
  agentBg: string;
  agentName: string;
  Content: React.ComponentType;
}[] = [
  { key: 'detect',     letter: 'A', title: 'Detect',     subtitle: 'Scanless, live, at AI-speed',                   agentBg: imgGenerative,  agentName: 'Agent Insta', Content: DetectContent },
  { key: 'prioritize', letter: 'B', title: 'Prioritize', subtitle: 'Attack paths & MITRE ATT&CK',                   agentBg: imgGenerative1, agentName: 'Agent Val',   Content: PrioritizeContent },
  { key: 'remediate',  letter: 'C', title: 'Remediate',  subtitle: 'Reliability-scored waves that keep systems up', agentBg: imgGenerative,  agentName: 'Agent Sara',  Content: RemediateContent },
];

const PANEL_HEIGHT = 148;

export default function ComboNudge8() {
  const [activeStep, setActiveStep] = useState<StepKey>('detect');

  return (
    <div
      className="flex flex-col relative"
      style={{
        width: 426,
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
        <div className="relative flex flex-col items-start pb-[16px] pt-[16px] px-[16px]">
          <p className="text-[#0647d9] text-[10px] font-medium leading-[15px] tracking-[0.05px]">
            Enterprise TruRisk™ · Autonomous Operations
          </p>
          <p className="text-[#0e1215] text-[16px] font-semibold leading-[20px] tracking-[0.08px] mt-[6px] w-full">
            Run your cyber-risk operations autonomously, at AI-speed. Pick a play; the right agent runs it.
          </p>
          <div className="flex flex-wrap gap-[6px] mt-[14px]">
            {[
              { value: '400K', label: 'findings' },
              { value: '70',   label: 'Internet facing' },
              { value: '47d',  label: 'MTTR' },
              { value: '13K',  label: 'CISA KEV' },
              { value: '557',  label: 'TruRisk ≥700' },
            ].map(c => (
              <div key={c.label} className="bg-white flex items-center gap-[3px] min-h-[24px] px-[10px] py-[4px] rounded-[20px] relative shrink-0">
                <div className="absolute inset-0 rounded-[20px] border border-[#cfd5dc] pointer-events-none" />
                <span className="font-semibold text-[#0e1215] text-[12px] leading-[14px] tracking-[0.06px] whitespace-nowrap">{c.value}</span>
                <span className="text-[#0e1215] text-[11px] leading-[14px] tracking-[0.05px] whitespace-nowrap">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white flex-1">
        {STEPS.map((step, i) => {
          const isActive = activeStep === step.key;
          const isLast = i === STEPS.length - 1;
          return (
            <div key={step.key} className={`relative ${!isLast ? 'border-b border-[#d9e4ff]' : ''}`}>
              <button onClick={() => setActiveStep(step.key)} className="w-full text-left relative overflow-hidden">
                <img alt="" src={imgContainer1} className="absolute inset-0 max-w-none object-cover size-full pointer-events-none" />
                {isActive && <div className="absolute bottom-0 left-0 right-0 border-b border-[#d9e4ff] pointer-events-none" />}
                <div className="relative flex items-center gap-[10px] px-[14px] py-[10px]">
                  <div
                    className="rounded-[6px] size-[22px] flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: isActive ? '#0647d9' : '#E5EBF5' }}
                  >
                    <span className="text-[11px] font-semibold leading-[14px] transition-colors duration-200" style={{ color: isActive ? '#fff' : '#6B7280' }}>
                      {step.letter}
                    </span>
                  </div>
                  <div className="flex items-end gap-[8px] flex-1 min-w-0 whitespace-nowrap overflow-hidden">
                    <span className="text-[13px] font-semibold leading-[18px] tracking-[0.06px] shrink-0 transition-colors duration-200" style={{ color: isActive ? '#0e1215' : '#9CA3AF' }}>
                      {step.title}
                    </span>
                    <span className="text-[#505964] text-[11px] font-medium leading-[14px] tracking-[0.05px] truncate">
                      {step.subtitle}
                    </span>
                  </div>
                  <AgentChip bg={step.agentBg} name={step.agentName} />
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown size={14} color={isActive ? '#0647d9' : '#9CA3AF'} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: PANEL_HEIGHT, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="bg-white px-[16px] py-[16px]" style={{ height: PANEL_HEIGHT }}>
                      <step.Content />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full overflow-hidden" style={{ backgroundColor: '#f3f7ff', borderTop: '1px solid #d9e4ff' }}>
        <div className="flex items-center justify-between px-[16px] py-[12px]">
          <span className="text-[#505964] text-[11px] font-normal leading-[15px]">
            Powered by Enterprise TruRisk™ agents
          </span>
          <button className="bg-[#0647d9] text-white text-[12px] font-normal leading-[16px] px-[12px] py-[7px] rounded-[8px] flex items-center gap-[5px] hover:opacity-90 transition-opacity whitespace-nowrap">
            Talk To My TAM
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
