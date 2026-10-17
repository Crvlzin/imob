import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/properties';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50 border-t border-b border-slate-200/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/60 px-3 py-1 rounded-md inline-block mb-2.5">
            Avaliações e Satisfação
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            O que nossos clientes dizem da Imob
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-100 mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-50">
                <span className="font-bold text-gray-900 text-sm block">
                  {t.name}
                </span>
                <span className="text-xs text-gray-500">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
