import React from 'react';
import { KPI, BenchmarkStatus } from '../types';
import { Calculator, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface KPICardProps {
  kpi: KPI;
  value: number | null;
  status: BenchmarkStatus;
  onClick: () => void;
}

const KPICard: React.FC<KPICardProps> = ({ kpi, value, status, onClick }) => {
  
  const getStatusColor = () => {
    switch (status) {
      case BenchmarkStatus.EXCELLENT: return 'bg-emerald-50 text-emerald-600';
      case BenchmarkStatus.GOOD: return 'bg-blue-50 text-blue-600';
      case BenchmarkStatus.WARNING: return 'bg-amber-50 text-amber-600';
      case BenchmarkStatus.CRITICAL: return 'bg-red-50 text-red-600';
      default: return 'bg-gray-50 text-gray-400';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case BenchmarkStatus.EXCELLENT: return <CheckCircle2 size={14} />;
      case BenchmarkStatus.GOOD: return <CheckCircle2 size={14} />;
      case BenchmarkStatus.WARNING: return <AlertTriangle size={14} />;
      case BenchmarkStatus.CRITICAL: return <AlertTriangle size={14} />;
      default: return <Calculator size={14} />;
    }
  };

  const getStatusText = () => {
     switch (status) {
      case BenchmarkStatus.EXCELLENT: return 'Excelente';
      case BenchmarkStatus.GOOD: return 'Bueno';
      case BenchmarkStatus.WARNING: return 'Revisar';
      case BenchmarkStatus.CRITICAL: return 'Crítico';
      default: return 'Sin datos';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-minimal hover:shadow-minimal-hover transition-all duration-500 cursor-pointer h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-medium text-gray-900 text-base group-hover:text-black transition-colors pr-4">
            {kpi.title}
        </h3>
        <div className={`px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 ${getStatusColor()}`}>
           {getStatusIcon()}
           {getStatusText()}
        </div>
      </div>
      
      <div className="mb-2 mt-auto">
        <div className="text-4xl font-light text-gray-900 tracking-tight">
          {value !== null ? kpi.format(value) : '—'}
        </div>
        <div className="text-xs text-gray-400 font-medium mt-2 flex items-center gap-1.5 uppercase tracking-wide">
          <TrendingUp size={12} />
          <span>Meta: {kpi.benchmarkText}</span>
        </div>
      </div>
      
      {/* Description removed for cleaner look, or kept very subtle if needed. Currently kept invisible unless hovered for ultimate minimalism? No, let's keep it visible but very light. */}
      <div className="mt-4 pt-4 border-t border-gray-50">
        <p className="text-xs text-gray-400 leading-relaxed font-light">
          {kpi.description}
        </p>
      </div>
    </div>
  );
};

export default KPICard;