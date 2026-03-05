"use client"

import * as React from "react"
import { Bell, Menu, Building2 } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { GlobalSearch } from "./global-search"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-neutral-100 bg-white/80 backdrop-blur-md px-4 sm:px-6">
            <div className="flex items-center gap-4">
                {/* Desktop Sidebar Toggle Place (Managed inside Sidebar component) */}
                {/* Horizontal divider could be here if needed */}
                <div className="w-px h-5 bg-neutral-200 mx-0 hidden lg:block invisible"></div>

                {/* Breadcrumbs */}
                <div className="hidden sm:flex">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#" className="font-medium text-neutral-500 hover:text-neutral-900">Gösterge Paneli</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-neutral-300" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-medium text-neutral-900">Kullanıcılar</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <GlobalSearch />

                <button className="relative flex h-10 w-10 items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors hover:bg-neutral-50 rounded-lg">
                    <Bell className="h-[20px] w-[20px]" />
                    <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-neutral-900 ring-2 ring-white" />
                </button>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden flex items-center">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <button className="flex items-center justify-center h-9 w-9 text-neutral-500 hover:text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-200">
                                <Menu className="h-[18px] w-[18px]" />
                                <span className="sr-only">Toggle Menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-72 p-0 flex flex-col">
                            <SheetHeader className="p-4 border-b border-neutral-200 text-left sr-only">
                                <SheetTitle className="flex items-center gap-2 font-semibold">
                                    <Building2 className="h-5 w-5" />
                                    Academy OS
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex-1 w-full overflow-hidden [&>aside]:w-full [&>aside]:flex [&>aside]:border-none">
                                <Sidebar forceMobileExpanded={true} />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
