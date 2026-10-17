import React from 'react';
import { ShieldCheck, Search, Users, Banknote, ArrowRight } from 'lucide-react';
import { PILLARS } from '../data/properties';

const ICON_MAP = {
  ShieldCheck,
  Search,
  Users,
  Banknote,
};

export default function Pillars({ onExploreClick }) {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/60 px-3 py-1 rounded-md inline-block mb-3">
            Diferenciais Corporativos
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            A forma moderna e segura de encontrar o seu novo endereço.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eliminamos a burocracia do mercado imobiliário tradicional com governança jurídica, atendimento consultivo e transparência em todas as etapas.
          </p>
        </div>

        {/* Grade de 4 Pilares Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-100 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-50 flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:translate-x-1 transition-transform">
                  <span>Saber mais</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Chamada para Ação no meio da página */}
        <div className="mt-16 bg-brand-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl z-10 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
              Quer vender ou alugar o seu imóvel com a Imob?
            </h3>
            <p className="text-brand-100 text-sm sm:text-base leading-relaxed">
              Fotografia profissional, divulgação nos maiores portais do Brasil e assessoria completa sem custos adicionais.
            </p>
          </div>
          <div className="z-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/5511999998888?text=Olá!%20Quero%20cadastrar%20meu%20imóvel%20para%20venda%20ou%20locação."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all text-center"
            >
              Cadastrar Meu Imóvel
            </a>
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all border border-white/20 text-center"
            >
              Ver Imóveis Disponíveis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
