"use client"

import { Bell } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { GlobalSearch } from "./global-search"

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white px-6">
            <div className="flex items-center gap-4">
                {/* Breadcrumbs for internal page state */}
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Ana Sayfa</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Gösterge Paneli</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex items-center gap-4">
                <GlobalSearch />

                <button className="relative p-2 text-neutral-500 hover:text-neutral-900 transition-colors hover:bg-neutral-100 rounded-md">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
                </button>
            </div>
        </header>
    )
}
