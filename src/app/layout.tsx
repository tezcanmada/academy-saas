import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MasterLayout } from "@/components/layout/master-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Academy SaaS OS",
    description: "B2B/B2C Academy SaaS OS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <body className={inter.className}>
                <MasterLayout>{children}</MasterLayout>
            </body>
        </html>
    );
}
