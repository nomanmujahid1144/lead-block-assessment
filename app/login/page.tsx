"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-leadblocks-navy to-[#2d3558] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="LeadBlocks" width={200} height={60} />
          </div>
          <p className="text-leadblocks-navy">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-leadblocks-navy">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-leadblocks-navy focus:ring-leadblocks-red"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-leadblocks-navy">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-leadblocks-navy focus:ring-leadblocks-red"
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-leadblocks-red hover:bg-leadblocks-red-hover text-white"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-leadblocks-navy">
          Don't have an account?{" "}
          <Link href="/register" className="text-leadblocks-red hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}