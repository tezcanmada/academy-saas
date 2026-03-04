"use client"

import * as React from "react"
import {
    Building2,
    ChevronsLeft,
    ChevronsUpDown,
    LayoutDashboard,
    ChartColumn,
    BookOpenText,
    Award,
    ShieldCheck,
    ShoppingBag,
    Users,
    Wallet,
    Settings,
    LogOut,
    User,
    Moon
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// 9-Item Main Skeleton
const navigation = [
    { name: "Gösterge Paneli", icon: LayoutDashboard, href: "#", current: true },
    { name: "Analitik & Raporlar", icon: ChartColumn, href: "#", current: false },
]

const accordionNav = [
    {
        id: "item-1",
        name: "Eğitim & Programlar",
        icon: BookOpenText,
        children: [
            { name: "Tüm Eğitimler", href: "#" },
            { name: "Programlar", href: "#" },
            { name: "Canlı Yayınlar", href: "#" },
        ],
    },
    {
        id: "item-2",
        name: "Yetkinlik Yönetimi",
        icon: Award,
        children: [
            { name: "Sertifikalar", href: "#" },
            { name: "Sınavlar", href: "#" },
        ],
    },
    {
        id: "item-3",
        name: "Yasal Uyum & Sözleşmeler",
        icon: ShieldCheck,
        children: [
            { name: "Sözleşmeler", href: "#" },
            { name: "KVKK İzinleri", href: "#" },
        ],
    },
    {
        id: "item-4",
        name: "Akademi Market",
        icon: ShoppingBag,
        children: [
            { name: "Katalog", href: "#" },
            { name: "Siparişler", href: "#" },
        ],
    },
    {
        id: "item-5",
        name: "CRM & Kullanıcılar",
        icon: Users,
        children: [
            { name: "Kullanıcılar", href: "#" },
            { name: "Gruplar", href: "#" },
        ],
    },
    {
        id: "item-6",
        name: "Finans & Hakediş",
        icon: Wallet,
        children: [
            { name: "Faturalar", href: "#" },
            { name: "Ödemeler", href: "#" },
        ],
    },
]

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false)

    return (
        <div
            className={cn(
                "flex flex-col border-r border-neutral-200 bg-neutral-50/50 transition-all duration-300 ease-in-out h-full",
                isCollapsed ? "w-16" : "w-64"
            )}
        >
            {/* Header Area containing Logo and Collapse Button */}
            <div className="flex h-16 shrink-0 items-center justify-between px-4">
                <div className={cn("flex items-center gap-2 overflow-hidden", isCollapsed && "w-0 opacity-0")}>
                    <div className="flex bg-neutral-900 border border-neutral-800 text-white rounded-md p-1 items-center justify-center h-8 w-8 shrink-0">
                        <Building2 className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-sm tracking-tight truncate">Academy OS</span>
                </div>

                {/* The collapse action hover only */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={cn(
                        "p-1.5 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 rounded-md transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 focus:opacity-100",
                        !isCollapsed && "ml-auto"
                    )}
                    style={{ opacity: isCollapsed ? 1 : "" }} // when collapsed, always visible so you can expand
                    aria-label="Toggle Navigation"
                >
                    <ChevronsLeft className={cn("h-4 w-4 transition-transform duration-300", isCollapsed && "rotate-180")} />
                </button>
            </div>

            {/* Navigation Groups */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-6">

                {/* Top-Level Links */}
                <nav className="space-y-1">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-neutral-100",
                                item.current ? "bg-neutral-100 text-neutral-900" : "text-neutral-600 hover:text-neutral-900"
                            )}
                        >
                            <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                            {!isCollapsed && <span className="truncate">{item.name}</span>}
                        </a>
                    ))}
                </nav>

                {/* Accordion Links (Only Render fully if not collapsed, or we can use custom tooltip logic, for MVP minimal we just hide labels) */}
                {!isCollapsed ? (
                    <Accordion type="single" collapsible className="w-full space-y-1">
                        {accordionNav.map((item) => (
                            <AccordionItem value={item.id} key={item.id}>
                                <AccordionTrigger className="px-2 py-2 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900">
                                    <div className="flex items-center gap-x-3">
                                        <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                                        <span>{item.name}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="ml-5 mt-1 border-l border-neutral-200 pl-4 space-y-1">
                                        {item.children.map((child) => (
                                            <a
                                                key={child.name}
                                                href={child.href}
                                                className="block rounded-md px-2 py-1.5 text-sm text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                                            >
                                                {child.name}
                                            </a>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                    <nav className="space-y-1 pt-1 opacity-50">
                        {/* Collapsed version: Just icons showing */}
                        {accordionNav.map((item) => (
                            <div key={item.id} className="flex justify-center p-2 rounded-md hover:bg-neutral-100">
                                <item.icon className="h-4 w-4 text-neutral-600" />
                            </div>
                        ))}
                    </nav>
                )}

                {/* Bottom Menu Area */}
                <nav className="space-y-1 pt-4 pb-2 border-t border-neutral-200 mt-6">
                    <a
                        href="#"
                        className="group flex items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    >
                        <Settings className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {!isCollapsed && <span className="truncate">Sistem Ayarları</span>}
                    </a>
                </nav>
            </div>

            {/* User Footer Profile */}
            <div className="mt-auto border-t border-neutral-200 p-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className={cn(
                            "flex w-full items-center gap-2 rounded-md p-1.5 text-left text-sm transition-colors hover:bg-neutral-100 outline-none",
                            isCollapsed && "justify-center"
                        )}>
                            <Avatar className="h-8 w-8 rounded-md bg-white border border-neutral-200">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback className="rounded-md">IS</AvatarFallback>
                            </Avatar>

                            {!isCollapsed && (
                                <>
                                    <div className="grid flex-1 overflow-hidden leading-tight">
                                        <span className="truncate font-medium text-neutral-900">İsim Soyisim</span>
                                        <span className="truncate text-xs text-neutral-500">Admin</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto h-4 w-4 text-neutral-500" />
                                </>
                            )}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" side="top" sideOffset={12}>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">İsim Soyisim</p>
                                <p className="text-xs leading-none text-neutral-500">admin@academysaas.com</p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profilim</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Koyu Tema</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Çıkış Yap</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
