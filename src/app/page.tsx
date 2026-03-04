export default function Home() {
    return (
        <div className="flex h-full flex-col">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    Hoş Geldiniz, İsim Soyisim
                </h1>
                <p className="text-sm text-neutral-500 mt-1">
                    Genel bakış, analitik ve akademi sistem güncellemeleri.
                </p>
            </div>

            {/* Main Dashboard Placeholder */}
            <div className="flex-1 flex items-center justify-center rounded-xl border border-neutral-200 border-dashed bg-white shadow-sm overflow-hidden p-8">
                <div className="text-center max-w-sm">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100/50 mb-4 border border-neutral-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600"><path d="m16 20 5-5-5-5" /><path d="M21 15H9a4 4 0 0 1-4-4V3" /></svg>
                    </div>
                    <h2 className="text-lg font-medium text-neutral-900 mb-2">Sistem İskeleti Hazır.</h2>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                        Arayüz ve iş motorları devrede. Sol menüdeki navigasyon ağacını ve üst bardaki komut paketini (⌘K) test edebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
