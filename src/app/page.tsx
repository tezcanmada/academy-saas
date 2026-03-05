import { Network } from "lucide-react"

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto h-full flex flex-col">
            <div className="mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                    Hoş Geldiniz, İsim Soyisim
                </h1>
                <p className="text-neutral-500 mt-2 text-sm sm:text-base">
                    Sistem mimarisi yapılandırıldı. Tüm operasyonel modüller kullanıma hazır.
                </p>
            </div>

            <div className="flex items-center justify-center py-10 sm:py-20 flex-1">
                <div className="w-full max-w-2xl border-2 border-dashed border-neutral-200 rounded-[32px] bg-neutral-50/50 p-8 sm:p-12 text-center group transition-all hover:bg-neutral-50 hover:border-neutral-300">
                    <div className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center bg-white rounded-full shadow-sm border border-neutral-100 mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Network className="h-8 w-8 text-neutral-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-neutral-900 mb-2">Sistem İskeleti Hazır.</h2>
                    <p className="text-neutral-500 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
                        Arayüz ve iş motorları devrede. Artık verileri yönetmeye başlayabilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all shadow-md shadow-neutral-200 border-none outline-none">
                            Kayıt Oluştur
                        </button>
                        <button className="w-full sm:w-auto px-5 py-2.5 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-lg hover:bg-neutral-50 transition-all outline-none">
                            Belgeleri Oku
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-12 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between text-neutral-400 text-xs font-medium tracking-wide gap-4 sm:gap-0 pb-6">
                <p>© 2024 Academy OS. Tüm hakları saklıdır.</p>
                <div className="flex items-center gap-6 uppercase">
                    <a className="hover:text-neutral-900 transition-colors" href="#">Destek</a>
                    <a className="hover:text-neutral-900 transition-colors" href="#">Geri Bildirim</a>
                    <a className="hover:text-neutral-900 transition-colors" href="#">Gizlilik</a>
                </div>
            </div>
        </div>
    );
}
