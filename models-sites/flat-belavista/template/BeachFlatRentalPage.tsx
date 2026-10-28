"use client";

import React, { useState } from "react";
import { Waves, Star, MapPin, Users, Wifi, Wind, Coffee, Tv, Car, ShieldCheck, ArrowRight, MessageSquare, Heart } from "lucide-react";

export default function BeachFlatRentalPage() {
  const [activeTab, setActiveTab] = useState<string>("galeria");

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      {/* Top Banner Marquee */}
      <div className="bg-[#1B2B3A] text-amber-200 text-xs py-2 px-4 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-6 animate-pulse text-center">
          <span>🌊 Pé na Areia em Porto de Galinhas</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">⭐ Nota 9.8 no Booking & Airbnb Superhost</span>
          <span>•</span>
          <span>🌴 Piscina & Café da Manhã</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight text-[#1B2B3A]">Bela Vista</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">
              Duplo 303 C
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            <a href="#sobre" className="hover:text-[#1B2B3A]">O Flat</a>
            <a href="#comodidades" className="hover:text-[#1B2B3A]">Comodidades</a>
            <a href="#localizacao" className="hover:text-[#1B2B3A]">Localização</a>
            <a href="#depoimentos" className="hover:text-[#1B2B3A]">Avaliações</a>
          </nav>

          <a
            href="https://wa.me/5581999999999?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20o%20Flat%20Bela%20Vista%20303%20C%20em%20Porto%20de%20Galinhas."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#1B2B3A] text-white rounded-full hover:bg-slate-800 transition-all shadow-md"
          >
            Reservar Diária
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-bold mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Porto de Galinhas — Pernambuco</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1B2B3A] leading-tight mb-4">
              Sua estadia perfeita a poucos passos do mar.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-6 font-normal leading-relaxed">
              Desfrute do melhor de Porto de Galinhas no Flat Bela Vista Beach 303 C. 
              Piscina de águas mornas, varanda com brisa marinha, Wi-Fi veloz e conforto absoluto para até 4 pessoas.
            </p>

            {/* Badges de Confiança */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm mb-6">
              <div className="text-center">
                <span className="block text-xl font-extrabold text-[#1B2B3A]">9.8</span>
                <span className="text-[11px] text-slate-500 font-medium">Booking.com</span>
              </div>
              <div className="text-center border-x border-slate-100">
                <span className="block text-xl font-extrabold text-amber-500">5.0 ★</span>
                <span className="text-[11px] text-slate-500 font-medium">Airbnb Superhost</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-extrabold text-sky-600">50m</span>
                <span className="text-[11px] text-slate-500 font-medium">Até a Praia</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="https://wa.me/5581999999999"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full transition-all shadow-lg shadow-sky-600/20"
              >
                <span>Consultar Datas Disponíveis</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#comodidades"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all"
              >
                Ver Comodidades
              </a>
            </div>
          </div>

          {/* Card Visual Hero */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-tr from-[#1B2B3A] to-sky-700 rounded-3xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                  Duplo 303 C
                </span>
                <div className="flex items-center text-amber-300 text-xs font-semibold">
                  <Star className="w-4 h-4 fill-amber-300 mr-1" />
                  <span>Favorito dos Hóspedes</span>
                </div>
              </div>

              <div className="h-64 bg-slate-800/60 rounded-2xl flex items-center justify-center border border-white/20 mb-6">
                <span className="text-sm text-slate-300 font-medium">Galeria de Fotos do Flat & Piscina</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center space-x-2 bg-white/10 p-2.5 rounded-xl">
                  <Users className="w-4 h-4 text-sky-300" />
                  <span>Até 4 Hóspedes</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 p-2.5 rounded-xl">
                  <Wifi className="w-4 h-4 text-emerald-300" />
                  <span>Wi-Fi 500 Mbps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comodidades Grid */}
      <section id="comodidades" className="py-16 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs uppercase tracking-widest text-sky-600 font-bold mb-2">Tudo Pronto Para Sua Estadia</h2>
            <p className="text-3xl font-extrabold text-[#1B2B3A]">Comodidades Pensadas no Seu Conforto</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Wind, title: "Ar-Condicionado", desc: "Split silencioso no quarto e sala" },
              { icon: Wifi, title: "Wi-Fi Veloz", desc: "Fibra 500Mbps ideal para nômades" },
              { icon: Coffee, title: "Cozinha Equipada", desc: "Cafeteira, microondas e frigobar" },
              { icon: Tv, title: "Smart TV 55\"", desc: "Netflix, YouTube e canais a cabo" },
              { icon: Waves, title: "Piscina Adulto/Infantil", desc: "Área de lazer com espreguiçadeiras" },
              { icon: Car, title: "Vaga de Garagem", desc: "Estacionamento privativo e seguro" },
              { icon: ShieldCheck, title: "Portaria 24h", desc: "Acesso eletrônico e segurança total" },
              { icon: Heart, title: "Roupas de Cama e Banho", desc: "Enxoval 100% algodão higienizado" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1B2B3A] mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#1B2B3A] text-slate-400 text-xs text-center">
        <p>© {new Date().getFullYear()} Bela Vista Beach 303 C. Porto de Galinhas, PE. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
