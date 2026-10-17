import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Home, Bed, FilterX, ArrowLeft } from 'lucide-react';
import PropertyList from '../components/PropertyList';
import PropertyModal from '../components/PropertyModal';
import CustomDropdown from '../components/CustomDropdown';
import { PROPERTIES } from '../data/properties';

const PROPERTY_TYPES = [
  { value: 'all', label: 'Todos os Tipos' },
  { value: 'Apartamento', label: 'Apartamentos' },
  { value: 'Casa', label: 'Casas em Condomínio / Bairro' },
  { value: 'Cobertura', label: 'Coberturas Duplex' },
  { value: 'Studio', label: 'Studios & Flats' },
];

const BEDROOM_OPTIONS = [
  { value: 'all', label: 'Qualquer quantidade' },
  { value: '1', label: '1+ dormitório' },
  { value: '2', label: '2+ dormitórios' },
  { value: '3', label: '3+ dormitórios' },
  { value: '4', label: '4+ dormitórios' },
];

export default function PropertiesPage() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    purpose: 'all',
    type: 'all',
    bedrooms: 'all',
    location: ''
  });

  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleResetFilters = () => {
    setFilters({
      purpose: 'all',
      type: 'all',
      bedrooms: 'all',
      location: ''
    });
  };

  const handleScheduleVisit = (property) => {
    navigate('/#contato');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header Corporativo da Tela de Imóveis */}
      <section className="bg-slate-950 text-white pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb e botão voltar */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link to="/" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 font-semibold">Portfólio de Imóveis</span>
          </div>

          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-950/70 border border-brand-800/60 px-3 py-1 rounded-md inline-block mb-3">
              Catálogo Corporativo Imob
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white mb-3">
              Portfólio de Imóveis Selecionados
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Consulte as opções residenciais e corporativas disponíveis com parametrização completa de tipologia, localização e valor.
            </p>
          </div>

          {/* Barra de Filtro e Busca com Dropdowns Customizados */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-100 text-slate-900">
            {/* Abas Venda / Aluguel */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 sm:pb-4 mb-4">
              <div className="inline-flex rounded-xl bg-slate-100 p-1 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setFilters({ ...filters, purpose: 'all' })}
                  className={`px-4 py-1.5 rounded-lg transition-all ${
                    filters.purpose === 'all'
                      ? 'bg-white text-brand-700 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Todos
                </button>
                <button
                  type="button"
                  onClick={() => setFilters({ ...filters, purpose: 'Venda' })}
                  className={`px-4 py-1.5 rounded-lg transition-all ${
                    filters.purpose === 'Venda'
                      ? 'bg-white text-brand-700 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Comprar
                </button>
                <button
                  type="button"
                  onClick={() => setFilters({ ...filters, purpose: 'Aluguel' })}
                  className={`px-4 py-1.5 rounded-lg transition-all ${
                    filters.purpose === 'Aluguel'
                      ? 'bg-white text-brand-700 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Alugar
                </button>
              </div>

              {(filters.location || filters.type !== 'all' || filters.bedrooms !== 'all' || filters.purpose !== 'all') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline"
                >
                  <FilterX className="w-3.5 h-3.5" />
                  <span>Redefinir Filtros</span>
                </button>
              )}
            </div>

            {/* Inputs de Filtro com Dropdowns Customizados */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Localização */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 select-none">
                  <MapPin className="w-3.5 h-3.5 text-brand-600" />
                  Localização
                </label>
                <input
                  type="text"
                  placeholder="Bairro ou cidade..."
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full bg-white hover:bg-slate-50/80 focus:bg-white text-slate-900 text-sm font-medium px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all shadow-sm"
                />
              </div>

              {/* Custom Dropdown: Tipo de Imóvel */}
              <CustomDropdown
                label="Tipo de Imóvel"
                icon={Home}
                options={PROPERTY_TYPES}
                value={filters.type}
                onChange={(val) => setFilters({ ...filters, type: val })}
              />

              {/* Custom Dropdown: Quartos */}
              <CustomDropdown
                label="Dormitórios"
                icon={Bed}
                options={BEDROOM_OPTIONS}
                value={filters.bedrooms}
                onChange={(val) => setFilters({ ...filters, bedrooms: val })}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lista e Vitrine Completa dos Imóveis */}
      <div className="flex-1">
        <PropertyList
          properties={PROPERTIES}
          filters={filters}
          onFilterChange={setFilters}
          onSelectProperty={setSelectedProperty}
          onResetFilters={handleResetFilters}
        />
      </div>

      {/* Modal de Detalhes do Imóvel */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleVisit={handleScheduleVisit}
      />
    </div>
  );
}
