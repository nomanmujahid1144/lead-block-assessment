"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { LogOut, User, Menu, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-leadblocks-navy" />
          </button>
          <div className="lg:hidden">
            <Image src="/logo.png" alt="LeadBlocks" width={140} height={35} />
          </div>
          <h2 className="hidden md:block text-xl font-semibold text-leadblocks-navy">Dashboard</h2>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-2">
            <User className="w-4 h-4 text-leadblocks-navy" />
            <span className="text-sm text-leadblocks-navy">{user?.name}</span>
          </div>
          <Button 
            onClick={logout} 
            className="bg-[#DC3144] hover:bg-[#A53752] text-white"
            size="sm"
          >
            <LogOut className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-leadblocks-navy text-white p-4">
          <nav>
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2d3558]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Leads</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}