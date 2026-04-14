"use client";

import { Lock, Search, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Research Project
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">A Hybrid Efficient</span>{" "}
          <span className="text-primary">Searchable Encryption</span>{" "}
          <span className="text-foreground">Scheme</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
          with Reduced Query Time
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Implementing and comparing searchable encryption algorithms on the
          Enron Email Dataset. Achieving up to{" "}
          <span className="text-primary font-semibold">5,500x</span> faster
          query times through hash-based indexing.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#methodology"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Methodology
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border"
          >
            See Results
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">AES-128 Encryption</h3>
            <p className="text-sm text-muted-foreground text-center">
              Secure data encryption using Fernet symmetric encryption
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Hash-Based Index</h3>
            <p className="text-sm text-muted-foreground text-center">
              SHA-256 searchable tags for O(1) lookup performance
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">5,500x Faster</h3>
            <p className="text-sm text-muted-foreground text-center">
              Dramatic query time reduction vs linear search baseline
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
