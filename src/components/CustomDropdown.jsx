import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({
  label,
  icon: Icon,
  options = [],
  value,
  onChange,
  placeholder = 'Selecione uma opção',
  className = '',
  buttonClassName = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fecha o dropdown ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => String(opt.value) === String(value));
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className={`relative flex flex-col ${className}`} ref={dropdownRef}>
      {label && (
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 select-none">
          {Icon && <Icon className="w-3.5 h-3.5 text-brand-600" />}
          {label}
        </span>
      )}

      {/* Botão Trigger Customizado */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 bg-white hover:bg-slate-50/80 active:bg-slate-100 text-left border rounded-xl text-sm font-medium transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
          isOpen ? 'border-brand-600 ring-2 ring-brand-500/20' : 'border-slate-200 hover:border-slate-300'
        } ${buttonClassName}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          {!label && Icon && <Icon className="w-4 h-4 text-brand-600 shrink-0" />}
          <span className={`truncate ${selectedOption ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>
            {displayText}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-brand-600' : ''
          }`}
        />
      </button>

      {/* Menu Suspenso de Opções */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1.5 w-full min-w-[200px] bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
          {options.map((opt) => {
            const isSelected = String(opt.value) === String(value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-brand-50 text-brand-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && <Check className="w-4 h-4 text-brand-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
