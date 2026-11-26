import { useState } from 'react';
import { motion } from 'motion/react';

import svgPaths from '../../imports/VmdrToTruRiskEliminateNudge50/svg-c9xm3wssgc';
import imgScreenshot20260216At23719Pm1 from '../../imports/VmdrToTruRiskEliminateNudge50/8baee4a8c7af71a708b031003c66059793d16edc.png';

function Icon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(19,19,19,0.3)] content-stretch flex items-center left-1/2 p-[20px] rounded-[50px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] top-[calc(50%+0.5px)]" data-name="Icon">
      <div className="relative shrink-0 size-[60px]" data-name="Icons/ System Icons/ Media/ qx-play-button">
        <div className="absolute flex inset-[5%_5%_5%_15%] items-center justify-center">
          <div className="flex-none h-[48px] rotate-90 w-[54px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 48">
                <path clipRule="evenodd" d={svgPaths.p15337300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPart() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col gap-[8.556px] h-[235px] items-center overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Video part" href="https://www.figma.com/make/RgsUBHVJqdtWs2D5MDN4qN/TRE?fullscreen=1&t=IVs22zoVLnU5uU7D-1" target="_blank">
      <div className="h-[263px] relative shrink-0 w-[498px]" data-name="Screenshot 2026-02-16 at 2.37.19 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260216At23719Pm1} />
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.3)] h-[235px] left-[calc(50%+95px)] rounded-tl-[14px] rounded-tr-[14px] top-0 w-[456px]" />
      <Icon />
    </a>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(255,229,227,0.5)] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#fec2bc] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold gap-[6px] items-center justify-center p-[20px] relative w-full">
          <p className="leading-[24px] min-w-full relative shrink-0 text-[#0e1215] text-[20px] text-center tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Your MTTR is
          </p>
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#d81900] text-[0px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <p>
              <span className="leading-[40px] text-[32px]">1.5</span>
              <span className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[36px] text-[28px] tracking-[-0.28px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                x slower
              </span>
            </p>
          </div>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[#0e1215] text-[20px] text-center tracking-[0.1px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {`than Qualys `}
            <br aria-hidden="true" />
            TruRisk Eliminate customers.
          </p>
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Left">
      <p className="flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#505964] text-[16px] text-center tracking-[0.08px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Watch above video and share the report with your IT teams to optimize your patching process.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Left />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Button">
        <div className="bg-[#0647d9] flex-[1_0_0] min-h-px min-w-[102px] relative rounded-[12px]" data-name="_base button">
          <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[20px] py-[12px] relative w-full">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-center text-white tracking-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                Activate TruRisk Eliminate Trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[16px] relative w-full">
          <Frame5 />
          <Frame2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Card({ color }: { color: string }) {
  return (
    <div className="bg-white relative rounded-[16px] w-[426px]" data-name="VMDR to TruRisk Eliminate Nudge - 5.0">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <VideoPart />
        <Heading />
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5.212px_6.95px_0px_rgba(0,0,0,0.04),0px_2.061px_2.748px_0px_rgba(0,0,0,0.03)] ${color}`} />
    </div>
  );
}

const cards = [
  { id: 0, color: 'border-[#9cbaff]' },
  { id: 1, color: 'border-[#9cbaff]' },
  { id: 2, color: 'border-[#9cbaff]' },
];

// Scale factor per stack position: 1st behind = 0.9, 2nd behind = 0.8
const SCALE_STEP = 0.1;

export default function StackedHoverCards2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const isActive = index === activeIndex;

    if (isActive) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
        filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.20))',
      };
    }

    const stackOffset = offset > 0 ? offset : 3 + offset;
    const scale = 1 - SCALE_STEP * stackOffset;

    return {
      x: 75 * stackOffset,
      y: 0,
      scale,
      opacity: 1,
      zIndex: 10 - stackOffset,
      filter: `drop-shadow(${4 * stackOffset}px ${8 * stackOffset}px ${12 * stackOffset}px rgba(0,0,0,${0.15 + stackOffset * 0.05}))`,
    };
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="backdrop-blur-[49.35px] bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-center p-[20px] relative rounded-[16px]">
      {/* Card Stack */}
      <div className="h-[595px] relative w-[684px]">
        <div className="relative h-full w-full flex items-center justify-center">
          {cards.map((card, index) => {
            const style = getCardStyle(index);

            return (
              <motion.div
                key={card.id}
                className="cursor-pointer"
                initial={style}
                animate={style}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-213px',
                  marginTop: '-297.5px',
                  transformOrigin: 'center left',
                }}
                onClick={() => setActiveIndex(index)}
              >
                <Card color={card.color} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="content-stretch flex gap-[20px] items-start justify-center pl-[66px] relative shrink-0">
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shadow-[0px_0px_2px_0px_rgba(3,38,115,0.04),0px_4px_12px_0px_rgba(42,46,50,0.12)] shrink-0">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity"
              aria-label="Previous card"
            >
              <div className="absolute flex inset-[16.46%_31.46%] items-center justify-center">
                <div className="-scale-y-100 flex-none h-[13.414px] w-[7.414px]">
                  <div className="relative size-full">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41421 13.4142">
                      <path clipRule="evenodd" d={svgPaths.pc4c3700} fill="#0647D9" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Dots */}
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`h-[4px] rounded-[2px] shrink-0 transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-[#0647d9] w-[32px]'
                      : 'bg-[#cfd5dc] w-[16px]'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity"
              aria-label="Next card"
            >
              <div className="absolute inset-[16.46%_31.46%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41421 13.4142">
                  <path clipRule="evenodd" d={svgPaths.pf4dc700} fill="#0647D9" fillRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button className="bg-white content-stretch cursor-pointer flex items-center p-[8px] relative rounded-[20px] shadow-[0px_0px_2px_0px_rgba(3,38,115,0.04),0px_4px_12px_0px_rgba(42,46,50,0.12)] shrink-0 hover:bg-gray-50 transition-colors">
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-[12.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9999 15">
                <path d={svgPaths.p1b1b7e80} fill="#0647D9" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
