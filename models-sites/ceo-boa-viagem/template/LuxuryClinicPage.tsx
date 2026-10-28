"use client";

import React, { useState } from "react";
import { Sparkles, Shield, HeartPulse, Clock, MapPin, Award, CheckCircle2, ArrowRight, Phone, CalendarCheck, Globe } from "lucide-react";

interface Treatment {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
}

const treatments: Treatment[] = [
  {
    id: "lentes",
    title: "Lentes de Contato Dental",
    tagline: "Cerâmica pura e naturalidade microscópica",
    description: "Transformação estética planejada digitalmente via scanner 3D para harmonia perfeita com o formato do seu rosto.",
    benefits: ["Zero desgaste excessivo", "Resistência de alta longevidade", "Cor sob medida"]
  },
  {
    id: "harmonizacao",
    title: "Harmonização Facial & Orofacial",
    tagline: "Elegância, rejuvenescimento e proporção",
    description: "Protocolos com ácido hialurônico, bioestimuladores de colágeno e toxina botulínica aplicados por especialistas.",
    benefits: ["Resultados refinados e sutis", "Sem período de repouso longo", "Produtos padrão ouro mundial"]
  },
  {
    id: "implantes",
    title: "Implantes Guiados em 3D",
    tagline: "Precisão cirúrgica sem cortes desnecessários",
    description: "Planejamento virtual por tomografia para colocação de implantes com máxima biossegurança e rápida cicatrização.",
    benefits: ["Pós-operatório extremamente confortável", "Carga imediata quando indicada", "Garantia biológica"]
  }
];

export default function LuxuryClinicPage() {
  const [activeTreatment, setActiveTreatment] = useState<string>("lentes");

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#333333] font-sans selection:bg-[#C4973B] selection:text-white">
      {/* Top Bar Bilíngue & Horários */}
      <div className="bg-[#0F3E57] text-white/90 text-xs py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#C4973B]" />
              <span>Av. Boa Viagem, Recife - PE</span>
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-[#C4973B]" />
              <span>Segunda a Sexta: 08h às 19h</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <span className="flex items-center space-x-1 text-white/80">
              <Globe className="w-3.5 h-3.5 text-[#C4973B]" />
              <span>Atendimento Bilíngue (PT / EN)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Header Institucional */}
      <header className="sticky top-0 z-40 bg-[#F7F3EE]/95 backdrop-blur-md border-b border-[#E5DECE]">
        <div className="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-light tracking-widest text-[#0F3E57] uppercase font-serif">
              CEO <span className="font-semibold text-[#C4973B]">Boa Viagem</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-500 font-medium">
              Centro Estético & Odontológico
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-slate-700">
            <a href="#especialidades" className="hover:text-[#C4973B] transition-colors">Especialidades</a>
            <a href="#tecnologia" className="hover:text-[#C4973B] transition-colors">Tecnologia</a>
            <a href="#sobre" className="hover:text-[#C4973B] transition-colors">A Clínica</a>
            <a href="#depoimentos" className="hover:text-[#C4973B] transition-colors">Depoimentos</a>
          </nav>

          <a
            href="https://wa.me/5581999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20exclusiva%20no%20CEO%20Boa%20Viagem."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C4973B] text-white rounded-md hover:bg-[#b0842e] transition-all shadow-sm"
          >
            Agendamento VIP
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#E5DECE] rounded-full text-xs font-semibold text-[#C4973B] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excelência Odontológica & Estética Facial de Luxo</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#0F3E57] leading-tight mb-6 tracking-tight">
            A harmonia e a perfeição que o seu <span className="font-semibold text-[#C4973B]">sorriso merece.</span>
          </h1>

          <p className="text-lg text-slate-600 font-normal leading-relaxed mb-8">
            Combinamos ciência de precisão, tecnologia digital 3D e sensibilidade artística para criar 
            resultados naturais e exclusivos em um ambiente acolhedor no coração de Boa Viagem.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/5581999999999"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C4973B] hover:bg-[#b0842e] text-white font-semibold rounded-md transition-all shadow-md shadow-[#C4973B]/20"
            >
              <CalendarCheck className="w-4 h-4 mr-2" />
              <span>Agendar Consulta Avaliativa</span>
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-[#E5DECE] text-[#0F3E57] font-semibold rounded-md hover:bg-slate-50 transition-all"
            >
              Conhecer Procedimentos
            </a>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-20 px-6 bg-white border-y border-[#E5DECE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C4973B] font-bold">Tratamentos Exclusivos</span>
            <h2 className="text-3xl font-light text-[#0F3E57] mt-2">Cuidado integral de alto padrão</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map(t => (
              <div key={t.id} className="p-8 bg-[#F7F3EE] border border-[#E5DECE] rounded-xl flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <h3 className="text-xl font-semibold text-[#0F3E57] mb-2">{t.title}</h3>
                  <p className="text-xs font-medium text-[#C4973B] uppercase tracking-wider mb-4">{t.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{t.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {t.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C4973B]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/5581999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20${encodeURIComponent(t.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-[#0F3E57] hover:text-[#C4973B] transition-colors"
                >
                  <span>Solicitar Informações</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0F3E57] text-white/70 text-xs text-center">
        <p className="mb-2">© {new Date().getFullYear()} CEO Boa Viagem — Centro Estético & Odontológico. Recife/PE.</p>
        <p className="text-white/40">Responsabilidade Técnica Odontológica e Harmonização Orofacial. CRO-PE.</p>
      </footer>
    </div>
  );
}
