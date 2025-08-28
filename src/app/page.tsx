"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { motion } from "framer-motion";
import { Coffee, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function HomeScreen() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm border-b">
        <h1 className="text-2xl font-bold">☕ Ghenaya Coffee</h1>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to <span className="text-primary">☕ Ghenaya Coffee</span>
        </motion.h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-6">
          The best place to enjoy coffee, connect with friends, and experience
          moments that matter.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Order Now</Button>
          <Link href="/admin">
            <Button size="lg">Access Dashboard</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
          <CardHeader>
            <Coffee className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Premium Coffee</CardTitle>
          </CardHeader>
          <CardContent>
            Freshly brewed coffee from selected beans, giving you the best taste
            to start your day.
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
          <CardHeader>
            <Sparkles className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Cozy Atmosphere</CardTitle>
          </CardHeader>
          <CardContent>
            A relaxing environment with modern vibes, perfect for working or
            hanging out.
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
          <CardHeader>
            <Users className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Community</CardTitle>
          </CardHeader>
          <CardContent>
            Meet new people, share ideas, and grow together in our warm
            community.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
