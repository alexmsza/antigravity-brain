"use client";

import React, { useState } from "react";
import { Mic2, Video, Sliders, Scissors, Calendar, ArrowRight, CheckCircle2, Play, Radio, Users, Sparkles } from "lucide-react";

export default function PodcastStudioPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("mensal");

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090A0F]/85 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center text-black font-bold text-sm">
              POV
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">Ponto de Vista</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-medium mt-1">Estúdio de Podcast</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
            <a href="#estudio" className="hover:text-white transition-colors">O Estúdio</a>
            <a href="#estrutura" className="hover:text-white transition-colors">Estrutura</a>
            <a href="#cenarios" className="hover:text-white transition-colors">Cenários</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos & Valores</a>
          </nav>

          <a
            href="https://wa.me/5581999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20est%C3%BAdio%20Ponto%20de%20Vista."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-all font-mono"
          >
            Agendar Horário
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-amber-500/30 rounded-full text-xs text-amber-300 mb-6">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Estrutura 100% Pronta em Operação</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight mb-6">
            Seu podcast merece um <span className="font-serif italic text-amber-400 font-normal">cenário à altura.</span>
          </h1>

          <p className="text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Grave episódios impecáveis com microfones broadcast Shure, múltiplas câmeras 4K, 
            iluminação profissional e equipe técnica para operar tudo enquanto você foca na conversa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-14">
            <a
              href="https://wa.me/5581999999999"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Agendar Minha Gravação</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#cenarios"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all"
            >
              Conhecer os Cenários
            </a>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10 text-left">
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
              <span className="block text-2xl font-bold text-white font-mono">+200</span>
              <span className="text-xs text-slate-400">Episódios Gravados</span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
              <span className="block text-2xl font-bold text-amber-400 font-mono">4K Ultra HD</span>
              <span className="text-xs text-slate-400">Câmeras Multicâmera</span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
              <span className="block text-2xl font-bold text-white font-mono">Shure SM7B</span>
              <span className="text-xs text-slate-400">Padrão Rádio e Voz</span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
              <span className="block text-2xl font-bold text-amber-400 font-mono">0 Ruídos</span>
              <span className="text-xs text-slate-400">Tratamento Acústico</span>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura Técnica */}
      <section id="estrutura" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">Setup Profissional</h2>
          <p className="text-3xl font-light text-white">Tecnologia de ponta sem que você precise comprar nenhum equipamento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#12131A] border border-white/10 rounded-xl hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center mb-6">
              <Mic2 className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Áudio Cristalino</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Microfones dinâmicos com mesas digitais e processamento ao vivo para graves profundos e inteligibilidade impecável.
            </p>
          </div>

          <div className="p-8 bg-[#12131A] border border-white/10 rounded-xl hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Gravação Multicâmera 4K</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Três ou quatro ângulos simultâneos com corte ao vivo (Live Switcher) ou faixas separadas ISO para edição detalhada.
            </p>
          </div>

          <div className="p-8 bg-[#12131A] border border-white/10 rounded-xl hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center mb-6">
              <Scissors className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Cortes Prontos (Reels/TikTok)</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Opção de receber seu episódio com os 10 melhores momentos já cortados na vertical, legendados e prontos para postar.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#06070A] text-xs text-slate-500 text-center">
        <p>© {new Date().getFullYear()} Ponto de Vista Podcast Studio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
