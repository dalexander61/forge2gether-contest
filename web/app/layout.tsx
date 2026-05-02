import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Forge2gether Essay Contest",
  description: "Phase 1 scaffold for contest public pages."
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/contest", label: "Contest" },
  { href: "/rules", label: "Rules" },
  { href: "/privacy", label: "Privacy" },
  { href: "/training", label: "Training" },
  { href: "/submit", label: "Submit" },
  { href: "/faq", label: "FAQ" },
  { href: "/admin", label: "Admin" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-5xl flex-wrap gap-4 px-4 py-4 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
