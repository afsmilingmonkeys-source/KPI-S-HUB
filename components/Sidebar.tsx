import React from 'react';
import { 
  Megaphone, 
  Stethoscope, 
  Activity, 
  Award, 
  Euro, 
  LayoutDashboard, 
  Settings 
} from 'lucide-react';
import { KPICategory } from '../types';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: KPICategory | 'all';
  onSelectCategory: (cat: KPICategory | 'all') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone': return <Megaphone size={18} />;
      case 'Stethoscope': return <Stethoscope size={18} />;
      case 'Activity': return <Activity size={18} />;
      case 'Award': return <Award size={18} />;
      case 'Euro': return <Euro size={18} />;
      default: return <Activity size={18} />;
    }
  };

  return (
    <aside className="w-64 bg-gray-50/50 backdrop-blur-xl border-r border-gray-100 fixed left-0 top-16 h-[calc(100vh-4rem)] flex flex-col z-20 transition-all duration-300">
      <div className="p-4 py-8">
        <nav className="space-y-1">
          <button
            onClick={() => onSelectCategory('all')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-black text-white shadow-lg shadow-gray-200 font-medium'
                : 'text-gray-500 hover:text-black hover:bg-white hover:shadow-minimal font-normal'
            }`}
          >
            <LayoutDashboard size={18} strokeWidth={1.5} />
            Dashboard
          </button>

          <div className="pt-8 pb-4 px-4 text-[10px] font-semibold text-gray-300 uppercase tracking-widest">
            Gestión
          </div>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as KPICategory)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300 mb-1 ${
                activeCategory === cat.id
                  ? 'bg-black text-white shadow-lg shadow-gray-200 font-medium'
                  : 'text-gray-500 hover:text-black hover:bg-white hover:shadow-minimal font-normal'
              }`}
            >
              {getIcon(cat.icon)}
              {cat.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-100">
        <button className="flex items-center gap-3 text-gray-400 hover:text-black text-sm font-normal transition-colors">
          <Settings size={18} strokeWidth={1.5} />
          Ajustes
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;