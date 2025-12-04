import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw } from 'lucide-react';
import { KPI } from '../types';

interface InputModalProps {
  kpi: KPI | null;
  currentValues: Record<string, number>;
  onClose: () => void;
  onSave: (kpiId: string, values: Record<string, number>) => void;
}

const InputModal: React.FC<InputModalProps> = ({ kpi, currentValues, onClose, onSave }) => {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (kpi && currentValues) {
      const initialStrings: Record<string, string> = {};
      kpi.inputs.forEach(input => {
        initialStrings[input.key] = currentValues[input.key] !== undefined 
          ? currentValues[input.key].toString() 
          : '';
      });
      setValues(initialStrings);
    }
  }, [kpi, currentValues]);

  if (!kpi) return null;

  const handleChange = (key: string, val: string) => {
    // Only allow numbers and one decimal point
    if (/^\d*\.?\d*$/.test(val)) {
      setValues(prev => ({ ...prev, [key]: val }));
    }
  };

  const handleSave = () => {
    const numericValues: Record<string, number> = {};
    Object.entries(values).forEach(([key, val]) => {
      numericValues[key] = val === '' ? 0 : parseFloat(val as string);
    });
    onSave(kpi.id, numericValues);
    onClose();
  };

  // Live calculation preview
  const getPreview = () => {
    const numericValues: Record<string, number> = {};
    Object.entries(values).forEach(([key, val]) => {
        numericValues[key] = parseFloat(val as string) || 0;
    });
    const result = kpi.calculate(numericValues);
    return result;
  };

  const previewResult = getPreview();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-scale-in">
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">Calcular KPI</h3>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{kpi.title}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-slate-600 bg-blue-50 p-3 rounded-xl border border-blue-100">
            {kpi.description}
          </p>

          <div className="space-y-4">
            {kpi.inputs.map((input) => (
              <div key={input.key}>
                <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">
                  {input.label}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="decimal"
                    value={values[input.key] || ''}
                    onChange={(e) => handleChange(input.key, e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder-slate-400"
                  />
                  {input.unit && (
                    <span className="absolute right-4 top-3 text-slate-400 font-medium text-sm">
                      {input.unit}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Live Preview */}
          <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-xl mt-4 shadow-lg shadow-slate-200">
             <span className="text-slate-400 font-medium">Resultado Estimado</span>
             <span className="text-2xl font-bold">
               {previewResult !== null ? kpi.format(previewResult) : '--'}
             </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex gap-3">
          <button 
            onClick={() => setValues({})} 
            className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} />
            Limpiar
          </button>
          <button 
            onClick={handleSave}
            className="flex-[2] py-3 px-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md shadow-blue-200 transition-all flex items-center justify-center gap-2"
          >
            <Save size={18} />
            Guardar Datos
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;