import { ReactNode } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function MasterLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen bg-neutral-50/30 overflow-hidden text-neutral-900">
            <Sidebar />
            <div className="flex flex-col flex-1 h-full min-w-0 bg-white shadow-[-1px_0_0_0_rgba(0,0,0,0.03)]">
                <Header />
                <main className="flex-1 overflow-auto bg-neutral-50/40">
                    <div className="h-full px-6 py-6 md:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
