"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-leadblocks-navy min-h-screen text-white hidden lg:block">
      <div className="p-6">
        <Image src="/logo.png" alt="LeadBlocks" width={180} height={50} className="brightness-0 invert" />
      </div>
      <nav className="px-4">
        <Link
          href="/"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            pathname === "/" ? "bg-[#2d3558]" : "hover:bg-[#2d3558]"
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Leads</span>
        </Link>
      </nav>
    </div>
  );
}