import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KPICard from './components/KPICard';
import InputModal from './components/InputModal';
import { KPI, KPICategory, StoredData, BenchmarkStatus } from './types';
import { KPIS, CATEGORIES } from './constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<KPICategory | 'all'>('all');
  const [storedData, setStoredData] = useState<StoredData>(() => {
    const saved = localStorage.getItem('dentalgy_kpi_data');
    return saved ? JSON.parse(saved) : {};
  });
  const [selectedKPI, setSelectedKPI] = useState<KPI | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter KPIs based on category
  const filteredKPIs = activeCategory === 'all' 
    ? KPIS 
    : KPIS.filter(k => k.category === activeCategory);

  // Helper to calculate data
  const calculateValue = (kpi: KPI) => {
    const data = storedData[kpi.id];
    if (!data) return null;
    return kpi.calculate(data);
  };

  const handleSaveData = (kpiId: string, values: Record<string, number>) => {
    const newData = { ...storedData, [kpiId]: values };
    setStoredData(newData);
    localStorage.setItem('dentalgy_kpi_data', JSON.stringify(newData));
  };

  const getCategoryTitle = () => {
    if (activeCategory === 'all') return 'Dashboard';
    return CATEGORIES.find(c => c.id === activeCategory)?.label || 'KPIs';
  };

  const getCategorySubtitle = () => {
    if (activeCategory === 'all') return 'Rendimiento general';
    switch(activeCategory) {
      case 'marketing': return 'Captación y crecimiento';
      case 'clinical': return 'Eficiencia clínica';
      case 'operations': return 'Operaciones y recursos';
      case 'quality': return 'Experiencia de paciente';
      case 'finance': return 'Salud financiera';
      default: return '';
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <Sidebar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      
      {/* Main Content */}
      <main className="ml-64 flex-1 p-8 lg:p-12 mt-16 overflow-y-auto min-h-[calc(100vh-4rem)]">
        {/* Header Section */}
        <header className="mb-12 animate-fade-in-up max-w-6xl mx-auto">
          <div className="flex justify-between items-end pb-8 border-b border-gray-100">
            <div>
              <h1 className="text-3xl font-light text-black mb-2 tracking-tight">
                {getCategoryTitle()}
              </h1>
              <p className="text-gray-400 text-sm font-normal uppercase tracking-widest">
                {getCategorySubtitle()}
              </p>
            </div>
            
            {/* Minimalist AI Action */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-minimal hover:shadow-minimal-hover">
              <Sparkles size={14} className="text-gray-200" />
              <span>Analizar IA</span>
            </button>
          </div>
        </header>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredKPIs.map((kpi) => {
            const value = calculateValue(kpi);
            const status = value !== null ? kpi.getStatus(value) : BenchmarkStatus.NEUTRAL;
            
            return (
              <div key={kpi.id} className="animate-fade-in h-full">
                <KPICard 
                  kpi={kpi}
                  value={value}
                  status={status}
                  onClick={() => setSelectedKPI(kpi)}
                />
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredKPIs.length === 0 && (
           <div className="text-center py-20">
             <p className="text-gray-300 font-light">No hay datos disponibles.</p>
           </div>
        )}
        
        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs max-w-6xl mx-auto">
           <p>© 2025 Dentalgy OS.</p>
           <a href="#" className="flex items-center gap-1 hover:text-black transition-colors mt-2 md:mt-0 font-medium">
             Benchmarking <ArrowRight size={12} />
           </a>
        </footer>
      </main>

      {/* Modal */}
      {selectedKPI && (
        <InputModal 
          kpi={selectedKPI}
          currentValues={storedData[selectedKPI.id] || {}}
          onClose={() => setSelectedKPI(null)}
          onSave={handleSaveData}
        />
      )}
    </div>
  );
};

export default App;