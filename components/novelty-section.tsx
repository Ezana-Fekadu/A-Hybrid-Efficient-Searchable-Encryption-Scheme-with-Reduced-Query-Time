"use client";

import { Lightbulb, TrendingUp, Shield, Clock } from "lucide-react";

export function NoveltySection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Main Contribution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Novelty Statement
            </h2>

            <blockquote className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary mb-8">
              <p className="text-lg text-foreground leading-relaxed italic">
                &ldquo;The main contribution of this work is a hash-based inverted index
                for encrypted Enron emails that reduces query time by up to{" "}
                <span className="text-primary font-bold not-italic">5,562x</span>{" "}
                compared to standard linear search, while maintaining security through
                salted SHA-256 tags.&rdquo;
              </p>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed">
              Our approach demonstrates that practical searchable encryption can be
              achieved without sacrificing performance. By leveraging hash-based
              indexing with deterministic encryption tags, we enable instant O(1)
              lookup while preserving the security properties of the underlying
              encryption scheme.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">5,562x Speedup</h3>
              <p className="text-sm text-muted-foreground">
                Maximum query time reduction at 10,000 records
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">O(1) Lookup</h3>
              <p className="text-sm text-muted-foreground">
                Constant time search regardless of dataset size
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AES-128 Security</h3>
              <p className="text-sm text-muted-foreground">
                Industry-standard encryption for data protection
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Practical</h3>
              <p className="text-sm text-muted-foreground">
                Minimal memory overhead for significant gains
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
