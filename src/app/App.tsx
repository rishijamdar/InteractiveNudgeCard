import { useState } from 'react';
import InteractiveCardCarousel from './components/InteractiveCardCarousel';
import CubeNudge from './components/CubeNudge';
import VerticalStackedCards from './components/VerticalStackedCards';
import FlipCarousel from './components/FlipCarousel';
import ParallaxLayers from './components/ParallaxLayers';
import StackedHoverCards from './components/StackedHoverCards';
import StackedHoverCards2 from './components/StackedHoverCards2';
import ComboNudge1 from './components/ComboNudge1';
import ComboNudge2 from './components/ComboNudge2';
import ComboNudge3 from './components/ComboNudge3';
import ComboNudge4 from './components/ComboNudge4';
import ComboNudge5 from './components/ComboNudge5';
import ComboNudge6 from './components/ComboNudge6';
import ComboNudge7 from './components/ComboNudge7';
import ComboNudge8 from './components/ComboNudge8';

const statNudges = [
  { id: 'interactive-carousel', label: 'Horizontal Carousel', component: InteractiveCardCarousel },
  { id: 'cube-nudge', label: 'Cube Nudge', component: CubeNudge },
  { id: 'component-3', label: 'Vertical Carousel', component: VerticalStackedCards },
  { id: 'flip-carousel', label: 'Flip Carousel', component: FlipCarousel },
  { id: 'parallax-layers', label: 'Parallax Layers', component: ParallaxLayers },
  { id: 'stacked-hover', label: 'Stacked Hover', component: StackedHoverCards },
  { id: 'stacked-scaled', label: 'Stacked Scaled', component: StackedHoverCards2 },
];

const comboNudges: { id: string; label: string; component: React.ComponentType }[] = [
  { id: 'combo-nudge-2', label: 'All Visible 1', component: ComboNudge2 },
  { id: 'combo-nudge-7', label: 'All Visible 2', component: ComboNudge7 },
  { id: 'combo-nudge-3', label: 'Click Card 1', component: ComboNudge3 },
  { id: 'combo-nudge-6', label: 'Click Card 2', component: ComboNudge6 },
  { id: 'combo-nudge-1', label: 'Accordion', component: ComboNudge1 },
  { id: 'combo-nudge-8', label: 'Accordion 2', component: ComboNudge8 },
  { id: 'combo-nudge-4', label: 'Carousel', component: ComboNudge4 },
  { id: 'combo-nudge-5', label: 'Carousel Portrait', component: ComboNudge5 },
];

export default function App() {
  const [activePage, setActivePage] = useState<'stat' | 'combo'>('stat');
  const [activeStatComponent, setActiveStatComponent] = useState('interactive-carousel');
  const [activeComboComponent, setActiveComboComponent] = useState('combo-nudge-2');

  const components = activePage === 'stat' ? statNudges : comboNudges;
  const activeComponentId = activePage === 'stat' ? activeStatComponent : activeComboComponent;
  const setActiveComponent = activePage === 'stat' ? setActiveStatComponent : setActiveComboComponent;

  const ActiveComponentView = components.find(c => c.id === activeComponentId)?.component;

  return (
    <div className="size-full flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-0">
          <div className="flex gap-6">
            {(['stat', 'combo'] as const).map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`pb-3 px-1 text-sm font-semibold border-b-2 transition-all ${
                  activePage === page
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {page === 'stat' ? 'Stat Nudges' : 'Combo Nudges'}
              </button>
            ))}
          </div>
        </div>

        {/* Component Sub-navigation */}
        {components.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <nav className="flex gap-2 flex-wrap">
                {components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setActiveComponent(component.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      activeComponentId === component.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {component.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Component View */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex justify-center py-10">
          {ActiveComponentView ? (
            <ActiveComponentView />
          ) : (
            <div className="text-center text-gray-400">
              <p className="text-lg font-medium">Coming Soon</p>
              <p className="text-sm mt-2">No combo nudges have been added yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
