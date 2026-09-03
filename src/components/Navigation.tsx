import { NavTab } from '../types';

interface NavigationProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

const TABS: NavTab[] = ['Home', 'The Domain', 'Founder', 'Shop', 'Lookbook', 'Contact'];

export default function Navigation({ activeTab, onSelectTab }: NavigationProps) {
  return (
    <nav
      id="main-nav-pill"
      className="w-full sm:w-auto border border-red-900/40 hover:border-red-600/60 bg-[#0A0A0E]/80 backdrop-blur-xl rounded-full p-1 sm:p-1.5 flex items-center justify-start sm:justify-center gap-1 sm:gap-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(229,9,20,0.15)] overflow-x-auto no-scrollbar scroll-smooth transition-all duration-300 max-w-full"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            id={`nav-item-${tab.toLowerCase().replace(/\s+/g, '-')}`}
            type="button"
            onClick={() => onSelectTab(tab)}
            className={`relative px-3.5 sm:px-5 py-2 sm:py-2 min-h-[40px] sm:min-h-[36px] flex items-center justify-center rounded-full text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer select-none shrink-0 active:scale-95 ${
              isActive
                ? 'bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.7)] font-extrabold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
}

