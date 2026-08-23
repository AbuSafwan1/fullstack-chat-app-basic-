import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore.js";
import { Send, Check, Palette, Sparkles } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Halo! Bagaimana tampilan tema barunya?", isSent: false },
  {
    id: 2,
    content: "Keren banget! Warnanya menyesuaikan dengan serasi.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-24 pb-16 max-w-5xl">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-1 border-b border-base-300 pb-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-tight">Tema Antarmuka</h2>
          </div>
          <p className="text-sm text-base-content/70">
            Pilih skema warna favorit Anda untuk menyesuaikan tampilan aplikasi
            chat.
          </p>
        </div>

        {/* Grid Pilihan Tema */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-base-content/60 uppercase tracking-wider">
            <span>Daftar Tema Tersedia ({THEMES.length})</span>
            <span className="capitalize text-primary flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Aktif: {theme}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {THEMES.map((t) => {
              const isSelected = theme === t;
              return (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`
                    group relative flex flex-col items-center gap-2 p-2.5 rounded-xl transition-all duration-200 border
                    ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-sm ring-2 ring-primary/20"
                        : "border-base-300 hover:border-base-content/20 hover:bg-base-200/50"
                    }
                  `}
                >
                  {/* Palette Preview Box */}
                  <div
                    className="relative h-9 w-full rounded-lg overflow-hidden border border-base-300/50 shadow-inner"
                    data-theme={t}
                  >
                    <div className="absolute inset-0 grid grid-cols-4 gap-0.5 p-1 bg-base-100">
                      <div className="rounded-sm bg-primary"></div>
                      <div className="rounded-sm bg-secondary"></div>
                      <div className="rounded-sm bg-accent"></div>
                      <div className="rounded-sm bg-neutral"></div>
                    </div>

                    {/* Centang untuk Tema yang Dipilih */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center">
                        <div className="bg-primary text-primary-content p-1 rounded-full shadow-md">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Label Nama Tema */}
                  <span className="text-[11px] font-medium truncate w-full text-center capitalize">
                    {t}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Preview Chat */}
        <div className="space-y-3 pt-4">
          <h3 className="text-base font-semibold flex items-center gap-2">
            Pratinjau Tampilan Teks
          </h3>

          <div className="rounded-2xl border border-base-300 overflow-hidden bg-base-200/50 p-4 sm:p-6 shadow-sm">
            <div className="max-w-md mx-auto">
              {/* Mock Chat Card */}
              <div className="bg-base-100 rounded-2xl shadow-md border border-base-300 overflow-hidden">
                {/* Chat Header */}
                <div className="px-4 py-3 border-b border-base-300 bg-base-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold text-sm shadow-sm">
                        J
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-base-100"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm leading-none">
                        Aril
                      </h4>
                      <p className="text-[11px] text-base-content/60 mt-0.5">
                        Online
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages Body */}
                <div className="p-4 space-y-3 h-[220px] overflow-y-auto bg-base-100/50">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs shadow-sm space-y-1
                          ${
                            message.isSent
                              ? "bg-primary text-primary-content rounded-br-none"
                              : "bg-base-200 text-base-content rounded-bl-none"
                          }
                        `}
                      >
                        <p className="leading-relaxed">{message.content}</p>
                        <p
                          className={`
                            text-[9px] text-right font-medium opacity-70
                          `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input Bar */}
                <div className="p-3 border-t border-base-300 bg-base-100">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="input input-bordered input-sm flex-1 text-xs focus:outline-none rounded-xl"
                      placeholder="Ketik pesan..."
                      value="Ini adalah pratinjau pesan"
                      readOnly
                    />
                    <button className="btn btn-primary btn-sm rounded-xl px-3">
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
