import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, X, Play, Pause, ChevronRight } from "lucide-react";
import { MONUMENTS, type Monument } from "./types";
import MonumentModel from "./components/MonumentModel";

export default function App() {
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const startAudio = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      // Ambil semua voice
      const voices = window.speechSynthesis.getVoices();

      // Cari voice Bahasa Indonesia
      const indoVoice = voices.find((voice) => voice.lang === "id-ID");

      if (indoVoice) {
        utterance.voice = indoVoice;
        utterance.lang = "id-ID";
      } else {
        console.warn(
          "Voice Bahasa Indonesia tidak ditemukan, fallback ke default"
        );
      }

      // Optional tuning biar lebih natural
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => setIsPlaying(false);

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleMonumentClick = (monument: Monument) => {
    setSelectedMonument(monument);
  };

  const closeModal = () => {
    stopAudio();
    setSelectedMonument(null);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-sky-500 selection:text-black">
      {/* Header */}
      <header className="border-b border-white/5 py-10 px-8 md:px-12 flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">
            The Global Heritage Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-serif italic font-light">
            KELOMPOK 5 SISTEM MULTIMEDIA
          </h1>
        </div>
      </header>

      {/* Hero Section / Description */}
      <section className="px-8 md:px-12 py-12 max-w-2xl">
        <h2 className="text-xl md:text-2xl font-serif italic opacity-70 leading-relaxed">
          Jelajahi mahakarya arsitektur dunia, di mana setiap bangunan menyimpan
          cerita tentang waktu dan budaya.
        </h2>
      </section>

      {/* Main Grid */}
      <main className="px-8 md:px-12 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {MONUMENTS.map((monument) => (
            <button
              key={monument.id}
              onClick={() => handleMonumentClick(monument)}
              className="group glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all hover:bg-white/10 hover:-translate-y-1 text-center relative overflow-hidden"
            >
              <div className="transition-transform group-hover:scale-110 duration-500">
                <img
                  src={`https://flagcdn.com/w80/${monument.isoCode}.png`}
                  alt={monument.country}
                  className="w-12 h-8 object-cover rounded-sm border border-white/20 shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold block">
                  {monument.country}
                </span>
                <h3 className="font-medium text-sm">{monument.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Modal - Unified transition for better stability */}
      <AnimatePresence>
        {selectedMonument && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-hidden">
            <motion.div
              {...({
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: closeModal,
                className:
                  "absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer",
              } as any)}
            />

            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.9, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.9, y: 20 },
                className:
                  "glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] p-6 md:p-10 relative flex flex-col md:flex-row gap-8 z-10",
              } as any)}
            >
              <div className="absolute top-6 right-8 text-[10px] uppercase tracking-widest opacity-30 font-bold hidden md:block">
                {selectedMonument.id.toUpperCase()}-001
              </div>

              {/* Left Side: 3D View */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="relative group/canvas monument-glow rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-b from-sky-400/5 to-transparent">
                  <MonumentModel
                    modelPath={selectedMonument.modelPath}
                    isDark={true}
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest opacity-20 pointer-events-none w-full text-center">
                    Interactive 3D view active
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 flex flex-col border-white/5">
                <div className="text-center md:text-left space-y-4 mb-8">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <img
                      src={`https://flagcdn.com/w160/${selectedMonument.isoCode}.png`}
                      alt={selectedMonument.country}
                      className="w-16 h-10 object-cover rounded-md border border-white/20 shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <h2 className="text-3xl md:text-4xl font-serif italic">
                      {selectedMonument.name}
                    </h2>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    {selectedMonument.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="bg-white/5 rounded-3xl p-6 flex items-center gap-6 border border-white/5">
                    <button
                      type="button"
                      onClick={() =>
                        isPlaying
                          ? stopAudio()
                          : startAudio(selectedMonument.audioDescription)
                      }
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                        isPlaying
                          ? "bg-sky-500 text-black animate-pulse"
                          : "bg-sky-500 text-black hover:bg-sky-400"
                      }`}
                    >
                      {isPlaying ? (
                        <Pause size={24} />
                      ) : (
                        <Play size={24} fill="currentColor" className="ml-1" />
                      )}
                    </button>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-50 font-bold">
                        <span>Audio Guide</span>
                        <span>{isPlaying ? "Live" : "Ready"}</span>
                      </div>
                      <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          {...({
                            animate: { width: isPlaying ? "100% " : "0%" },
                            transition: { duration: 30, ease: "linear" },
                            className: "h-full bg-sky-500",
                          } as any)}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-8 text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity underline underline-offset-8 block mx-auto md:mx-0"
                  >
                    Back to Atlas
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="p-8 text-[10px] uppercase tracking-[0.5em] opacity-20 text-center border-t border-white/5">
        Created by Kelompok 5 Sistem Multimedia — Monumen Nasional Tiap Negara /
        2026
      </footer>
    </div>
  );
}
