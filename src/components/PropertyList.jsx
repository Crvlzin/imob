import React, { useState } from 'react';
import { Bed, Bath, Car, Maximize, MapPin, Heart, ArrowUpRight, FilterX, ArrowUpDown } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

const SORT_OPTIONS = [
  { value: 'relevant', label: 'Mais Relevantes' },
  { value: 'price-asc', label: 'Menor Preço' },
  { value: 'price-desc', label: 'Maior Preço' },
  { value: 'area-desc', label: 'Maior Metragem' },
];

export default function PropertyList({
  properties,
  filters,
  onFilterChange,
  onSelectProperty,
  onResetFilters
}) {
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('relevant');

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filtragem dos imóveis
  const filteredProperties = properties.filter((item) => {
    if (filters.purpose && filters.purpose !== 'all') {
      if (item.purpose.toLowerCase() !== filters.purpose.toLowerCase()) return false;
    }
    if (filters.type && filters.type !== 'all') {
      if (item.type.toLowerCase() !== filters.type.toLowerCase()) return false;
    }
    if (filters.bedrooms && filters.bedrooms !== 'all') {
      const minBed = parseInt(filters.bedrooms, 10);
      if (item.bedrooms < minBed) return false;
    }
    if (filters.location && filters.location.trim() !== '') {
      const query = filters.location.toLowerCase();
      const match =
        item.neighborhood.toLowerCase().includes(query) ||
        item.city.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query);
      if (!match) return false;
    }
    return true;
  });

  // Ordenação
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'area-desc') return b.area - a.area;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const formatPrice = (val, purpose) => {
    const formatted = val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
    return purpose === 'Aluguel' ? `${formatted}/mês` : formatted;
  };

  return (
    <section id="imoveis" className="py-16 sm:py-20 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Unidades Residenciais & Comerciais
            </h2>
            <p className="text-slate-500 text-sm mt-1 font-normal">
              Exibindo {sortedProperties.length} de {properties.length} imóveis cadastrados
            </p>
          </div>

          {/* Filtros Rápidos & Ordenação com CustomDropdown */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filtro Rápido de Tipo */}
            <div className="inline-flex rounded-xl bg-slate-200/80 p-1 text-xs font-semibold">
              <button
                onClick={() => onFilterChange({ ...filters, purpose: 'all' })}
                className={`px-3 py-1.5 rounded-lg transition-all ${!filters.purpose || filters.purpose === 'all'
                    ? 'bg-white text-brand-700 font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Todos
              </button>
              <button
                onClick={() => onFilterChange({ ...filters, purpose: 'Venda' })}
                className={`px-3 py-1.5 rounded-lg transition-all ${filters.purpose === 'Venda'
                    ? 'bg-white text-brand-700 font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Venda
              </button>
              <button
                onClick={() => onFilterChange({ ...filters, purpose: 'Aluguel' })}
                className={`px-3 py-1.5 rounded-lg transition-all ${filters.purpose === 'Aluguel'
                    ? 'bg-white text-brand-700 font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Aluguel
              </button>
            </div>

            {/* Ordenação Customizada */}
            <div className="w-48">
              <CustomDropdown
                icon={ArrowUpDown}
                options={SORT_OPTIONS}
                value={sortBy}
                onChange={setSortBy}
                buttonClassName="py-1.5 px-3 text-xs"
              />
            </div>
          </div>
        </div>

        {/* Grade de Cards de Imóveis */}
        {sortedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map((property) => {
              const isFav = favorites.includes(property.id);
              return (
                <div
                  key={property.id}
                  onClick={() => onSelectProperty(property)}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  {/* Foto e Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                    {/* Tag Venda / Aluguel */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-lg text-white shadow-sm ${property.purpose === 'Venda' ? 'bg-brand-600' : 'bg-emerald-600'
                        }`}>
                        {property.purpose}
                      </span>
                      {property.featured && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500 text-white shadow-sm">
                          Destaque
                        </span>
                      )}
                    </div>

                    {/* Botão de Favoritar */}
                    <button
                      onClick={(e) => toggleFavorite(property.id, e)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${isFav
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm'
                        }`}
                      aria-label="Favoritar imóvel"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                    </button>

                    {/* Preço sobre a imagem */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-xl sm:text-2xl font-black drop-shadow-md">
                        {formatPrice(property.price, property.purpose)}
                      </span>
                      {property.condoFee > 0 && (
                        <span className="text-[11px] block text-gray-200 drop-shadow">
                          Cond. R$ {property.condoFee} · IPTU R$ {property.tax}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Detalhes do Imóvel */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span>{property.neighborhood}, {property.city}</span>
                        <span className="mx-1">·</span>
                        <span className="font-semibold text-gray-700">{property.type}</span>
                      </div>

                      <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-brand-600 transition-colors line-clamp-1">
                        {property.title}
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                        {property.description}
                      </p>
                    </div>

                    {/* Comodidades com ícones */}
                    <div>
                      <div className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-100 text-gray-600 text-xs">
                        <div className="flex items-center gap-1" title={`${property.bedrooms} Quartos`}>
                          <Bed className="w-4 h-4 text-gray-400" />
                          <span>{property.bedrooms} qtos</span>
                        </div>
                        <div className="flex items-center gap-1" title={`${property.bathrooms} Banheiros`}>
                          <Bath className="w-4 h-4 text-gray-400" />
                          <span>{property.bathrooms} banh</span>
                        </div>
                        <div className="flex items-center gap-1" title={`${property.parking} Vagas`}>
                          <Car className="w-4 h-4 text-gray-400" />
                          <span>{property.parking} vg</span>
                        </div>
                        <div className="flex items-center gap-1" title={`${property.area} m²`}>
                          <Maximize className="w-4 h-4 text-gray-400" />
                          <span>{property.area} m²</span>
                        </div>
                      </div>

                      {/* Botão Ver Detalhes */}
                      <button
                        onClick={() => onSelectProperty(property)}
                        className="w-full mt-4 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-brand-50 text-gray-800 hover:text-brand-600 font-bold text-xs transition-colors"
                      >
                        <span>Ver Imóvel Completo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <FilterX className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Nenhum imóvel encontrado com esses filtros
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-5">
              Experimente alterar os critérios de busca ou limpar os filtros para visualizar todo o acervo.
            </p>
            <button
              onClick={onResetFilters}
              className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-sm shadow hover:bg-brand-700 transition-colors"
            >
              Limpar Filtros e Ver Todos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
