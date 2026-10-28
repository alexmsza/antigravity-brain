"use client";

import React, { useState } from "react";
import { Building2, Warehouse, TrendingUp, Compass, ArrowRight, ShieldCheck, MapPin, CheckCircle2, PhoneCall } from "lucide-react";

interface ListingItem {
  id: string;
  category: "Logística" | "Empresarial" | "Industrial";
  title: string;
  location: string;
  area: string;
  clearHeight?: string;
  floorCapacity?: string;
  highlight: string;
}

const mockListings: ListingItem[] = [
  {
    id: "1",
    category: "Logística",
    title: "Condomínio Logístico Suape Prime — Módulo A",
    location: "Cabo de Santo Agostinho / Suape - PE",
    area: "8.500 m²",
    clearHeight: "12m livre",
    floorCapacity: "6 ton/m²",
    highlight: "16 docas com niveladores automáticos e sprinkler ESFR"
  },
  {
    id: "2",
    category: "Empresarial",
    title: "Torre Corporativa Rio Ave — Lajes Inteiras",
    location: "Boa Viagem / Pina - Recife/PE",
    area: "1.200 m² privativos",
    clearHeight: "3.2m",
    highlight: "Certificação LEED Gold, 28 vagas e piso elevado"
  },
  {
    id: "3",
    category: "Industrial",
    title: "Área Industrial Estruturada BR-101 Sul",
    location: "Jaboatão dos Guararapes - PE",
    area: "25.000 m² de terreno",
    highlight: "Acesso direto à rodovia com subestação própria de energia"
  }
];

export default function CorporateRealEstatePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredListings = selectedCategory === "Todos" 
    ? mockListings 
    : mockListings.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header Corporativo Flutuante */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0F172A]/85 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-semibold tracking-wider text-white">AMPLUS</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 border-l border-white/20 pl-3">
              Imóveis Corporativos
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm text-slate-300 font-medium">
            <a href="#oportunidades" className="hover:text-white transition-colors">Oportunidades</a>
            <a href="#linhas" className="hover:text-white transition-colors">Linhas de Atuação</a>
            <a href="#inteligencia" className="hover:text-white transition-colors">Inteligência</a>
            <a href="#contato" className="hover:text-white transition-colors">Diretoria</a>
          </nav>

          <a
            href="https://wa.me/5581999999999?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20ativos%20corporativos%20com%20a%20AMPLUS."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white text-slate-900 rounded-sm hover:bg-slate-200 transition-all shadow-sm"
          >
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-xs font-medium text-slate-300 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Curadoria e Inteligência Imobiliária no Nordeste</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight mb-6">
              Espaços para um <span className="font-semibold text-white">novo ciclo corporativo.</span>
            </h1>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
              Conectamos empresas, indústrias e fundos aos ativos corporativos mais nobres e eficientes 
              do mercado imobiliário em Recife e polos logísticos estratégicos.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#oportunidades"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-white text-slate-950 rounded-sm hover:bg-slate-100 transition-all"
              >
                <span>Explorar Ativos</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-white/20 text-white rounded-sm hover:bg-white/5 transition-all"
              >
                Solicitar Curadoria Privada
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Business Lines */}
      <section id="linhas" className="py-20 px-6 border-b border-white/10 bg-[#131D31]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Estrutura de Atuação</h2>
            <p className="text-2xl font-light text-white">Duas frentes de negócio com a mesma curadoria técnica rigorosa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0F172A] border border-white/10 rounded-sm">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-sm flex items-center justify-center mb-6">
                <Warehouse className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Linha Corporativa & Industrial</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Foco estrito em eficiência operacional, expansão logística de última milha e consolidação de sedes empresariais.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Galpões e Centros de Distribuição Cross-docking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Lajes Corporativas e Prédios Monousuários</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Glebas e Terrenos para Built to Suit (BTS)</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-[#0F172A] border border-white/10 rounded-sm">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-sm flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Linha Residencial & Lifestyle</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Ativos residenciais selecionados para diversificação de patrimônio pessoal, veraneio e refúgio.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Imóveis Urbanos de Alto Padrão (Recife)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Casas e Bangalôs de Praia (Litoral Sul e Norte)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Propriedades Rurais e Fazendas no Agreste</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Oportunidades */}
      <section id="oportunidades" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Portfólio em Destaque</h2>
            <p className="text-2xl font-light text-white">Ativos Selecionados Disponíveis</p>
          </div>

          <div className="flex space-x-2 mt-4 sm:mt-0">
            {["Todos", "Logística", "Empresarial", "Industrial"].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-all ${
                  selectedCategory === category 
                    ? "bg-white text-slate-900" 
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredListings.map(item => (
            <div key={item.id} className="bg-[#131D31] border border-white/10 rounded-sm p-6 flex flex-col justify-between hover:border-white/30 transition-all">
              <div>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-sm font-semibold">
                  {item.category}
                </span>
                <h4 className="text-lg font-medium text-white mt-4 mb-2">{item.title}</h4>
                <div className="flex items-center text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
                  <span>{item.location}</span>
                </div>
                <div className="py-3 border-y border-white/5 space-y-1 text-xs text-slate-300 mb-4">
                  <p><span className="text-slate-500">Área:</span> {item.area}</p>
                  {item.clearHeight && <p><span className="text-slate-500">Pé Direito:</span> {item.clearHeight}</p>}
                  {item.floorCapacity && <p><span className="text-slate-500">Piso:</span> {item.floorCapacity}</p>}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.highlight}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={`https://wa.me/5581999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20im%C3%B3vel%3A%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center space-x-1"
                >
                  <span>Consultar Condições</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 px-6 border-t border-white/10 bg-[#0A0F1D] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>© {new Date().getFullYear()} AMPLUS Imóveis Corporativos. Recife / PE. Todos os direitos reservados.</p>
          <p className="text-slate-400">Curadoria e Inteligência Imobiliária para Ativos no Nordeste.</p>
        </div>
      </footer>
    </div>
  );
}
