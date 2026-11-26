import { useState } from 'react';
import ComboNudgeImported from '../../imports/ComboNudge-1/index';

type Property = 'Default' | '2' | '3';

const CARDS: Property[] = ['Default', '2', '3'];

export default function ComboNudge6() {
  const [active, setActive] = useState<Property>('Default');
  const [direction, setDirection] = useState(0);

  const handleClick = (prop: Property) => {
    if (prop === active) return;
    const oldIdx = CARDS.indexOf(active);
    const newIdx = CARDS.indexOf(prop);
    setDirection(newIdx > oldIdx ? 1 : -1);
    setActive(prop);
  };

  return (
    <div
      className="relative"
      style={{
        width: 720,
        borderRadius: 24,
        boxShadow: '0px 0px 4px 0px rgba(3,38,115,0.12), 1px 8px 16px 0px rgba(42,46,50,0.16)',
      }}
    >
      {/* The imported component renders statically; only its inner content panel animates */}
      <ComboNudgeImported property1={active} direction={direction} />

      {/*
        Transparent click overlay on the three card selector buttons.
        Cards section starts at ~171px (header ~159px + pt-16 - 4px chip overhang).
        Each card = (720 - 12 - 12 - 12 - 12) / 3 = 224px, gap=12px.
      */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 171, left: 12, right: 12, height: 160 }}
      >
        {CARDS.map((prop, i) => (
          <button
            key={prop}
            aria-label={`Select card ${i + 1}`}
            onClick={() => handleClick(prop)}
            className="absolute top-0 h-full cursor-pointer pointer-events-auto bg-transparent border-0 p-0"
            style={{ left: i * (224 + 12), width: 224 }}
          />
        ))}
      </div>
    </div>
  );
}
