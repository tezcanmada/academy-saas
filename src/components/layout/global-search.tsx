"use client"

import * as React from "react"
import { Search } from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

export function GlobalSearch() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            {/* Desktop Search Button */}
            <button
                onClick={() => setOpen(true)}
                className="hidden sm:flex items-center justify-between w-64 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-400 text-sm hover:border-neutral-300 transition-all"
            >
                <div className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors">
                    <Search className="h-[18px] w-[18px]" />
                    <span className="font-medium">Arama yap...</span>
                </div>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-neutral-200 bg-white px-1.5 font-mono text-[10px] font-medium text-neutral-400">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Mobile Search Button */}
            <button
                onClick={() => setOpen(true)}
                className="sm:hidden flex items-center justify-center h-9 w-9 text-neutral-500 hover:text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-200 transition-colors"
            >
                <Search className="h-[18px] w-[18px]" />
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Akademi dünyasında ara..." />
                <CommandList>
                    <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
                    <CommandGroup heading="Hızlı Menü">
                        <CommandItem>Gösterge Paneli</CommandItem>
                        <CommandItem>Eğitimler</CommandItem>
                        <CommandItem>Sistem Ayarları</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
