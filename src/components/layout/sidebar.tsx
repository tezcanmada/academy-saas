"use client"

import * as React from "react"
import {
    LayoutDashboard,
    Boxes,
    BookOpenText,
    Award,
    ShieldCheck,
    ShoppingBag,
    UsersRound,
    Banknote,
    BarChart3,
    Settings,
    UserRound,
    Moon,
    LogOut,
    PanelLeftClose,
    PanelLeftOpen,
    ChevronsUpDown,
} from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Menu definitions
const topNavItems = [
    {
        title: "Gösterge Paneli",
        icon: LayoutDashboard,
        href: "#",
    },
]

const accordionItems = [
    {
        title: "Eğitim & Programlar",
        icon: BookOpenText,
        children: [
            { title: "Katalog", href: "#" },
            { title: "Sertifikalar", href: "#" },
        ],
    },
    {
        title: "Yetkinlik Yönetimi",
        icon: Award,
        children: [
            { title: "Değerlendirmeler", href: "#" },
            { title: "Rozetler", href: "#" },
        ],
    },
    {
        title: "Yasal Uyum & Sözleşmeler",
        icon: ShieldCheck,
        children: [
            { title: "Sözleşmeler", href: "#" },
            { title: "Onaylar", href: "#" },
        ],
    },
    {
        title: "Mağaza",
        icon: ShoppingBag,
        children: [
            { title: "Ürünler", href: "#" },
            { title: "Siparişler", href: "#" },
        ],
    },
    {
        title: "CRM & Kullanıcılar",
        icon: UsersRound,
        isActive: true, // Mark active context
        children: [
            { title: "Müşteriler", href: "#" },
            { title: "Temsilciler", href: "#" },
        ],
    },
    {
        title: "Finans",
        icon: Banknote,
        children: [
            { title: "Faturalar", href: "#" },
            { title: "Raporlar", href: "#" },
        ],
    },
]

export function Sidebar({ forceMobileExpanded = false }: { forceMobileExpanded?: boolean }) {
    const [isCollapsedState, setIsCollapsed] = React.useState(false)
    const isCollapsed = forceMobileExpanded ? false : isCollapsedState;

    return (
        <aside
            className={cn(
                "group relative flex flex-col border-r border-neutral-200 bg-neutral-50 transition-all duration-300 ease-in-out h-full z-50",
                isCollapsed ? "w-[72px]" : "w-64"
            )}
        >
            {/* Sidebar Header */}
            <div className="flex h-16 items-center justify-between px-4 border-b border-neutral-200/60 transition-all">
                <div className={cn("flex items-center gap-2.5 overflow-hidden whitespace-nowrap", isCollapsed && "opacity-0 invisible w-0")}>
                    <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-md bg-neutral-900 text-white">
                        <Boxes className="size-[18px]" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-neutral-900">
                        Academy OS
                    </span>
                </div>
                {!forceMobileExpanded && (
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className={cn(
                            "flex p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100",
                            isCollapsed && "mx-auto w-full justify-center"
                        )}
                        aria-label="Toggle Sidebar"
                    >
                        {isCollapsed ? (
                            <PanelLeftOpen className="size-5" />
                        ) : (
                            <PanelLeftClose className="size-5" />
                        )}
                    </button>
                )}
            </div>

            {/* Navigation Flow */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 custom-scrollbar">
                {/* Top Links */}
                <div className="space-y-1 mb-2">
                    {topNavItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className={cn(
                                "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100",
                                isCollapsed ? "justify-center px-0" : "gap-3"
                            )}
                            title={isCollapsed ? item.title : undefined}
                        >
                            <item.icon className={cn("size-5 flex-shrink-0 text-neutral-500 transition-all group-hover:scale-105 group-hover:text-neutral-900", isCollapsed && "m-0")} />
                            {!isCollapsed && <span className="flex-1 truncate">{item.title}</span>}
                        </a>
                    ))}
                </div>

                {!isCollapsed && (
                    <div className="px-3 pt-4 pb-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-400">
                            Modüller
                        </span>
                    </div>
                )}

                {/* Accordion Links */}
                <div className="space-y-1">
                    <Accordion type="single" collapsible defaultValue="CRM & Kullanıcılar" className="w-full">
                        {accordionItems.map((item, index) => {
                            const activeClasses = item.isActive ? "bg-neutral-100/80 border border-neutral-200/50 shadow-sm" : "hover:bg-neutral-100";
                            return (
                                <AccordionItem key={index} value={item.title} className="border-none">
                                    <AccordionTrigger
                                        className={cn(
                                            "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900 transition-all hover:no-underline [&[data-state=open]>svg:last-child]:rotate-180",
                                            isCollapsed ? "justify-center px-0" : "gap-3",
                                            activeClasses
                                        )}
                                        title={isCollapsed ? item.title : undefined}
                                    >
                                        <div className="flex items-center gap-3 w-full">
                                            <item.icon className={cn("size-5 flex-shrink-0 text-neutral-500 transition-all group-hover:text-neutral-900", item.isActive && "text-neutral-900", isCollapsed && "m-0")} />
                                            {!isCollapsed && <span className="flex-1 truncate text-left">{item.title}</span>}
                                        </div>
                                    </AccordionTrigger>
                                    {!isCollapsed && (
                                        <AccordionContent className="pb-1">
                                            <ul className="flex flex-col ml-9 mt-1 space-y-1 border-l border-neutral-200/60 pl-2">
                                                {item.children.map((child, childIndex) => (
                                                    <li key={childIndex}>
                                                        <a
                                                            href={child.href}
                                                            className="flex px-3 py-1.5 text-[13px] font-medium text-neutral-500 transition-all hover:text-neutral-900 hover:translate-x-0.5"
                                                        >
                                                            {child.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-neutral-200/60 bg-neutral-50/50 p-3 pb-4">
                <a
                    href="#"
                    className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 mb-1",
                        isCollapsed ? "justify-center px-0" : "gap-3"
                    )}
                    title={isCollapsed ? "Analitik" : undefined}
                >
                    <BarChart3 className={cn("size-5 flex-shrink-0 text-neutral-500 transition-all group-hover:scale-105 group-hover:text-neutral-900", isCollapsed && "m-0")} />
                    {!isCollapsed && <span className="flex-1 truncate">Analitik</span>}
                </a>
                <a
                    href="#"
                    className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 mb-4",
                        isCollapsed ? "justify-center px-0" : "gap-3"
                    )}
                    title={isCollapsed ? "Sistem Ayarları" : undefined}
                >
                    <Settings className={cn("size-5 flex-shrink-0 text-neutral-500 transition-all duration-500 group-hover:rotate-45 group-hover:text-neutral-900", isCollapsed && "m-0")} />
                    {!isCollapsed && <span className="flex-1 truncate">Sistem Ayarları</span>}
                </a>

                {/* Profile Footer */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className={cn(
                                "flex w-full items-center gap-3 rounded-lg border border-neutral-200 bg-white p-2 text-left shadow-sm transition-all hover:border-neutral-300 active:scale-[0.98]",
                                isCollapsed && "justify-center p-2 border-transparent bg-transparent shadow-none hover:bg-neutral-100"
                            )}
                        >
                            <Avatar className="size-8 rounded-full border border-neutral-100 flex-shrink-0">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback className="text-xs font-semibold bg-neutral-900 text-white">İS</AvatarFallback>
                            </Avatar>
                            {!isCollapsed && (
                                <>
                                    <div className="flex flex-1 flex-col overflow-hidden min-w-0">
                                        <p className="truncate text-[13px] font-medium leading-none text-neutral-900">
                                            İsim Soyisim
                                        </p>
                                        <p className="truncate text-[11px] font-medium tracking-wide text-neutral-500 mt-0.5">
                                            Admin
                                        </p>
                                    </div>
                                    <ChevronsUpDown className="size-4 text-neutral-500" />
                                </>
                            )}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" side="right" sideOffset={8}>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">İsim Soyisim</p>
                                <p className="text-xs leading-none text-neutral-500">
                                    admin@academyos.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer gap-2">
                            <UserRound className="h-4 w-4 text-neutral-500" />
                            <span>Hesabım / Profilim</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer gap-2">
                            <Moon className="h-4 w-4 text-neutral-500" />
                            <span>Koyu Tema</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer gap-2 text-red-600 focus:bg-red-50 focus:text-red-700">
                            <LogOut className="h-4 w-4" />
                            <span>Çıkış Yap</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </aside>
    )
}
