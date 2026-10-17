import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Car, Maximize, MessageCircle, Calendar, Check, Share2 } from 'lucide-react';

export default function PropertyModal({ property, onClose, onScheduleVisit }) {
  if (!property) return null;

  const [activeImage, setActiveImage] = useState(property.gallery ? property.gallery[0] : property.image);
  const [copied, setCopied] = useState(false);

  const formatPrice = (val, purpose) => {
    const formatted = val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
    return purpose === 'Aluguel' ? `${formatted}/mês` : formatted;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no imóvel "${property.title}" (Cód. #${property.id}) localizado em ${property.neighborhood}. Poderiam me passar mais informações?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior de ações */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-lg text-white ${
              property.purpose === 'Venda' ? 'bg-brand-600' : 'bg-emerald-600'
            }`}>
              {property.purpose}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              Cód. #{property.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-1 text-xs font-medium"
              title="Copiar link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Compartilhar'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Galeria de Fotos */}
          <div>
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 mb-3 shadow-inner">
              <img
                src={activeImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            {property.gallery && property.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {property.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImage === img ? 'border-brand-600 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cabeçalho do Imóvel e Preço Corporativo */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <MapPin className="w-4 h-4 text-brand-600" />
                <span>{property.neighborhood}, {property.city}</span>
                <span>·</span>
                <span className="font-semibold text-slate-700">{property.type}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                {property.title}
              </h2>
            </div>

            <div className="text-left md:text-right shrink-0 bg-brand-50/80 border border-brand-200/60 p-4 rounded-2xl">
              <span className="text-xs uppercase font-bold text-brand-700 block mb-0.5">
                Valor para {property.purpose}
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-brand-900">
                {formatPrice(property.price, property.purpose)}
              </span>
              {property.condoFee > 0 && (
                <div className="text-xs text-gray-500 mt-1">
                  Condomínio: R$ {property.condoFee} · IPTU: R$ {property.tax}
                </div>
              )}
            </div>
          </div>

          {/* Grid de Características */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 p-5 rounded-2xl text-center">
            <div className="flex flex-col items-center">
              <Bed className="w-5 h-5 text-brand-600 mb-1" />
              <span className="text-lg font-bold text-gray-900">{property.bedrooms}</span>
              <span className="text-xs text-gray-500">Dormitórios ({property.suites} suítes)</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="w-5 h-5 text-brand-600 mb-1" />
              <span className="text-lg font-bold text-gray-900">{property.bathrooms}</span>
              <span className="text-xs text-gray-500">Banheiros</span>
            </div>
            <div className="flex flex-col items-center">
              <Car className="w-5 h-5 text-brand-600 mb-1" />
              <span className="text-lg font-bold text-gray-900">{property.parking}</span>
              <span className="text-xs text-gray-500">Vagas de Garagem</span>
            </div>
            <div className="flex flex-col items-center">
              <Maximize className="w-5 h-5 text-brand-600 mb-1" />
              <span className="text-lg font-bold text-gray-900">{property.area} m²</span>
              <span className="text-xs text-gray-500">Área Privativa</span>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Sobre este imóvel</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Comodidades e Lazer */}
          {property.features && property.features.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comodidades e Diferenciais</h3>
              <div className="flex flex-wrap gap-2.5">
                {property.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 text-gray-700 text-xs font-semibold"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Botões de Ação Direta */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/5511999998888?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com Corretor no WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onScheduleVisit(property);
              }}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all text-sm"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Visita</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
