import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  Scale, 
  Landmark, 
  ArrowRight, 
  MessageCircle, 
  Star, 
  HelpCircle, 
  Clock, 
  Award,
  ChevronDown,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function LandingPage() {
  // Estado do formulário de consultoria VIP
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    objective: 'Moradia Própria',
    budget: 'R$ 500 mil a R$ 1,2 milhão',
    neighborhood: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Formata mensagem pronta para o WhatsApp
    const text = encodeURIComponent(
      `Olá! Acabei de solicitar uma Consultoria VIP na Imob.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Objetivo:* ${formData.objective}\n` +
      `*Orçamento:* ${formData.budget}\n` +
      (formData.neighborhood ? `*Região de Interesse:* ${formData.neighborhood}\n` : '') +
      `Gostaria de receber a curadoria de imóveis personalizados!`
    );

    // Opcional: abre o WhatsApp com os dados preenchidos
    setTimeout(() => {
      window.open(`https://wa.me/5511999998888?text=${text}`, '_blank');
    }, 1200);
  };

  const scrollToForm = () => {
    const el = document.getElementById('consultoria-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'A Consultoria Imobiliária VIP tem algum custo para mim?',
      a: 'Não! Para compradores e investidores, nossa assessoria completa é 100% gratuita. Os honorários imobiliários são legalmente suportados pela parte vendedora conforme as diretrizes do CRECI.'
    },
    {
      q: 'Vocês me ajudam a conseguir o financiamento bancário?',
      a: 'Sim. Nossa equipe de correspondentes bancários credenciados analisa seu perfil nos principais bancos (Caixa, Itaú, Bradesco, Santander e Banco do Brasil) para garantir a menor taxa de juros e a aprovação mais rápida.'
    },
    {
      q: 'Quanto tempo leva para receber a curadoria de imóveis?',
      a: 'Em até 24 a 48 horas úteis após a nossa conversa de alinhamento, você recebe uma lista exclusiva com opções filtradas a dedo que atendem rigorosamente aos seus critérios.'
    },
    {
      q: 'Vocês realizam a checagem jurídica de documentos?',
      a: 'Com certeza. Antes de qualquer sinal ou assinatura, nosso setor jurídico faz uma varredura completa da matrícula, certidões negativas dos proprietários e histórico do imóvel para que você compre com risco zero.'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      
      {/* 1. HERO SECTION (Sem vídeo, alta conversão e impacto visual) */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        
        {/* Fundo com iluminação atmosférica e textura corporativa */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 z-0"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge de Autoridade */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg shadow-brand-950/50 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>Consultoria Imobiliária Privada • Imob</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
            Encontre o imóvel ideal com <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-emerald-400">segurança jurídica</span> e as melhores taxas do mercado.
          </h1>

          {/* Subtítulo persuasivo */}
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
            Elimine semanas de buscas frustrantes. Tenha um especialista sênior dedicado a encontrar, negociar e aprovar o seu imóvel sob medida, sem custo algum para você.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 active:scale-95 text-white font-bold text-base sm:text-lg shadow-xl shadow-brand-600/25 transition-all flex items-center justify-center gap-3 border border-brand-400/30"
            >
              <span>Solicitar Consultoria Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20uma%20consultoria%20imobiliária%20VIP."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-base sm:text-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          {/* Indicadores de Prova e Garantia */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-slate-800/80 w-full max-w-4xl text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-black text-white">+R$ 450M</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Em imóveis negociados</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">98%</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Aprovações de crédito</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-black text-white">48 Horas</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Curadoria personalizada</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-black text-brand-400">100%</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Segurança jurídica</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OS 4 PILARES DA CONSULTORIA VIP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-brand-400 uppercase tracking-widest mb-3">
            O Padrão Imob de Atendimento
          </h2>
          <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Como transformamos a busca pelo seu imóvel em uma experiência descomplicada
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pilar 1 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-brand-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">Curadoria Sob Medida</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Você não precisa olhar centenas de anúncios desatualizados. Filtramos apenas unidades reais que atendem perfeitamente ao seu perfil.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-brand-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Economia média de 30 horas
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-brand-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">Poder de Negociação</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Nossos consultores dominam o preço do m² da região para negociar condições comerciais vantajosas e economizar seu capital.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-brand-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Melhor valor de fechamento
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-brand-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Scale className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">Blindagem Jurídica</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Auditoria rigorosa de certidões cíveis, fiscais, trabalhistas e verificação completa da matrícula antes de qualquer compromisso financeiro.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-brand-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Contratos seguros e transparentes
            </div>
          </div>

          {/* Pilar 4 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-brand-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Landmark className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">Crédito & Financiamento</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Correspondentes bancários oficiais que comparam e negociam taxas nos maiores bancos do país para viabilizar sua compra nas melhores condições.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-brand-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Agilidade na emissão do contrato
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMULÁRIO DE CAPTAÇÃO / DIAGNÓSTICO VIP */}
      <section id="consultoria-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Atendimento Sem Compromisso
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-3">
              Receba Sua Curadoria de Imóveis VIP
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Preencha os campos abaixo para que nosso especialista prepare uma seleção exclusiva e entre em contato via WhatsApp.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {formSubmitted ? (
              <div className="text-center py-12 px-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-950/50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-heading font-extrabold text-white mb-3">
                  Solicitação Enviada com Sucesso!
                </h4>
                <p className="text-slate-300 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                  Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe especializada já recebeu seus dados e está abrindo o atendimento direto no seu WhatsApp!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
                  >
                    Enviar Outro Pedido
                  </button>
                  <a
                    href="https://wa.me/5511999998888"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir Conversa Agora</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Linha 1: Objetivo & Orçamento */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Qual é o seu objetivo? *
                    </label>
                    <select
                      name="objective"
                      value={formData.objective}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    >
                      <option value="Moradia Própria">Moradia Própria (Comprar para morar)</option>
                      <option value="Investimento">Investimento (Renda ou Valorização)</option>
                      <option value="Primeiro Imóvel">Financiamento do Primeiro Imóvel</option>
                      <option value="Up-grade de Padrão">Upgrade de Imóvel / Alto Padrão</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Faixa de Valor Pretendida *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    >
                      <option value="Até R$ 500 mil">Até R$ 500 mil</option>
                      <option value="R$ 500 mil a R$ 1,2 milhão">R$ 500 mil a R$ 1,2 milhão</option>
                      <option value="R$ 1,2 milhão a R$ 3 milhões">R$ 1,2 milhão a R$ 3 milhões</option>
                      <option value="Acima de R$ 3 milhões">Acima de R$ 3 milhões (Alto Padrão)</option>
                    </select>
                  </div>
                </div>

                {/* Linha 2: Nome & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Linha 3: E-mail & Regiões */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Bairro ou Cidade de Preferência
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      placeholder="Ex: Jardins, Vila Mariana, Pinheiros..."
                      value={formData.neighborhood}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Botão de Envio */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-500 active:scale-[0.99] text-white font-extrabold text-base shadow-xl shadow-brand-600/30 transition-all flex items-center justify-center gap-3 border border-brand-400/40"
                  >
                    <span>Quero Minha Seleção de Imóveis Personalizada</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Seus dados estão protegidos. Não enviamos spam.</span>
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 4. DEPOIMENTOS DE QUEM JÁ FECHOU COM A IMOB */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-brand-400 uppercase tracking-widest mb-2 block">
            Casos Reais
          </span>
          <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            A satisfação de quem realizou o sonho com segurança
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                "Estávamos procurando apartamento há mais de 4 meses e já cansados de corretores insistentes. A Imob entendeu exatamente o que queríamos em uma conversa de 20 minutos e na segunda visita achamos nosso lar."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <p className="font-heading font-bold text-white text-sm">Mariana & Felipe Vasconcelos</p>
              <p className="text-xs text-slate-400">Compraram no Jardim Paulista</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                "A assessoria jurídica deles me salvou de comprar um imóvel que tinha penhora oculta na certidão dos herdeiros. O cuidado deles com o patrimônio do cliente é impecável."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <p className="font-heading font-bold text-white text-sm">Dr. Rodrigo Meirelles</p>
              <p className="text-xs text-slate-400">Investidor Imobiliário</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                "Aprovaram meu financiamento no banco com taxa de juros menor do que meu próprio gerente da agência havia me oferecido. Economizei mais de R$ 60 mil ao longo das parcelas."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <p className="font-heading font-bold text-white text-sm">Camila Torres</p>
              <p className="text-xs text-slate-400">Primeiro Imóvel em Moema</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-800">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight mb-2">
            Perguntas Frequentes
          </h3>
          <p className="text-slate-400 text-sm">
            Tire suas dúvidas rápidas sobre a consultoria imobiliária
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-brand-400 transition-colors"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-brand-400' : 'text-slate-500'}`} />
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. BANNER FINAL DE CONVERSÃO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-gradient-to-r from-brand-950 via-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight mb-2">
              Prefere falar direto com um consultor agora?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Nosso time está online para tirar dúvidas e iniciar seu atendimento no WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/5511999998888?text=Olá!%20Estou%20na%20Landing%20Page%20e%20gostaria%20de%20iniciar%20minha%20consultoria%20agora."
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center gap-3 shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp Agora</span>
          </a>
        </div>
      </section>

    </div>
  );
}
