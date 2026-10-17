import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, HelpCircle } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

const INTEREST_OPTIONS = [
  { value: 'Quero Comprar', label: 'Quero Comprar um Imóvel' },
  { value: 'Quero Alugar', label: 'Quero Alugar um Imóvel' },
  { value: 'Quero Anunciar', label: 'Quero Anunciar Meu Imóvel' },
  { value: 'Agendar Visita', label: 'Agendar Visita Presencial' },
  { value: 'Outro Assunto', label: 'Consultoria / Outro Assunto' },
];

export default function ContactSection({ selectedPropertyForVisit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: selectedPropertyForVisit ? `Visita: ${selectedPropertyForVisit.title}` : 'Quero Comprar',
    message: selectedPropertyForVisit ? `Olá! Gostaria de agendar uma visita para o imóvel "${selectedPropertyForVisit.title}" (Cód. #${selectedPropertyForVisit.id}).` : ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Quero Comprar',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contato" className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/60 px-3 py-1 rounded-md inline-block mb-2.5">
            Canais de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Fale com a Consultoria Imob
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Estamos à disposição para atendimento ágil via WhatsApp, telefone central ou reunião presencial em nossa sede.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Informações e Canais Oficiais */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-bold text-slate-900">
                Atendimento Executivo
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Solicite uma avaliação patrimonial, agende visitas ou tire dúvidas sobre processos contratuais e financiamento.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Imob."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-100 transition-colors group shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-800 block">WhatsApp Oficial (Direto)</span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      (11) 99999-8888
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">Tempo médio de resposta: 10 minutos</span>
                  </div>
                </a>

                {/* Telefone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">Central de Operações</span>
                    <span className="text-base font-bold text-slate-900">(11) 3040-5000</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Atendimento a clientes e investidores</span>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">E-mail Corporativo</span>
                    <span className="text-base font-bold text-slate-900">contato@imob.com.br</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Envio de propostas e documentação</span>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">Sede Corporativa</span>
                    <span className="text-base font-bold text-slate-900">Av. Brigadeiro Faria Lima, 2800</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Itaim Bibi · São Paulo - SP</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-center gap-2.5 text-xs text-slate-500 px-2 font-medium">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span>Segunda a Sexta: 08h às 19h · Sábados: 09h às 14h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
              Envie sua Mensagem
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-normal">
              Preencha os campos abaixo e nosso time de consultores entrará em contato prontamente.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center flex flex-col items-center justify-center py-12 animate-in fade-in">
                <CheckCircle className="w-14 h-14 text-emerald-600 mb-3" />
                <h4 className="text-xl font-heading font-bold text-emerald-950 mb-1">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-sm text-emerald-800 max-w-sm font-normal">
                  Recebemos seus dados. Um de nossos consultores entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="text-xs font-bold text-slate-700 block mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      placeholder="Ex: Roberto Alencar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="text-xs font-bold text-slate-700 block mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="text-xs font-bold text-slate-700 block mb-1.5">
                      E-mail Profissional *
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      placeholder="nome@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <CustomDropdown
                      label="Finalidade do Contato"
                      icon={HelpCircle}
                      options={INTEREST_OPTIONS}
                      value={formData.interest}
                      onChange={(val) => setFormData({ ...formData, interest: val })}
                      buttonClassName="py-3 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="text-xs font-bold text-gray-700 block mb-1">
                    Como podemos ajudar? *
                  </label>
                  <textarea
                    id="contactMessage"
                    rows="4"
                    required
                    placeholder="Conte sobre os bairros de preferência, faixa de valor ou detalhes do imóvel..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
