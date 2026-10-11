"use client";

import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, ArrowUpRight, Wallet, TrendingUp, Tags } from "lucide-react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import Link from "next/link";

export interface BottomNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Barra inferior fixa (mobile). Os demais módulos (Dívidas, Faturas, Notas e
// Gestão PJ) são abertos por atalhos no Dashboard.
const navItems: BottomNavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/movimentacoes", label: "Extrato", icon: ArrowUpRight },
  { href: "/contas", label: "Bancos", icon: Wallet },
  { href: "/investimentos", label: "Investim.", icon: TrendingUp },
  { href: "/categorias", label: "Categorias", icon: Tags },
];

function NavItem({ item, isActive }: { item: BottomNavItem; isActive: boolean }) {
  const Icon = item.icon;
  return (
    <Link href={item.href} className="w-[62px] shrink-0 flex flex-col items-center gap-[2px] active:opacity-70 transition-opacity">
      <span
        className={clsx(
          "flex items-center justify-center w-12 h-8 rounded-[12px] transition-colors duration-200",
          isActive ? "bg-[#5DA832] text-[#0A0A0A]" : "text-[#94A3B8]"
        )}
      >
        <Icon className="w-5 h-5" strokeWidth={2.1} />
      </span>
      <span className={clsx("text-[9.5px] font-semibold leading-none truncate max-w-[62px]", isActive ? "text-[#6fc23b]" : "text-[#94A3B8]")}>
        {item.label}
      </span>
    </Link>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <nav className="md:hidden fixed z-50 inset-x-0 bottom-0 bg-[#0F0F0F] border-t-[0.5px] border-[#2E2E2E] pt-2 pb-[calc(12px+env(safe-area-inset-bottom,0px))] px-1">
      <div className="w-full max-w-[310px] mx-auto flex items-start justify-center">
        {navItems.map((item) => (
          <NavItem key={item.href} item={item} isActive={isActive(item.href)} />
        ))}
      </div>
    </nav>
  );
}

export { navItems };
