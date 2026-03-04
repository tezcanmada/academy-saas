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
            <button
                onClick={() => setOpen(true)}
                className="group flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50/50 px-3 py-1.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-100 w-full md:w-64 max-w-sm"
            >
                <Search className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-neutral-500" />
                <span className="flex-1 text-left">Arama yap...</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-neutral-100 px-1.5 font-mono text-[10px] font-medium text-neutral-500 opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
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
