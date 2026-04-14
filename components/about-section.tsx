"use client";

import { Database, FileText, Shield, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About the Project
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Why Searchable Encryption?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Searching encrypted data is inherently slower than unencrypted search
                because traditional approaches require decrypting every entry to check
                for matches. This creates a significant performance bottleneck,
                especially with large datasets.
              </p>
              <p>
                <strong className="text-foreground">Linear search</strong> checks every
                entry sequentially, resulting in O(n) time complexity. While simple, it
                becomes impractical for datasets with thousands or millions of records.
              </p>
              <p>
                <strong className="text-foreground">Binary search</strong> offers O(log n)
                complexity but requires sorted data and doesn&apos;t directly support
                encrypted content without additional indexing structures.
              </p>
              <p>
                Our <strong className="text-primary">hybrid approach</strong> combines
                hash-based indexing with encryption to achieve O(1) lookup performance
                while maintaining data security. This is the main contribution of this
                research.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Dataset</h3>
                  <p className="text-sm text-muted-foreground">
                    Enron Email Dataset - Over 500,000 real-world corporate emails.
                    We use subsets of 100 to 10,000 entries for benchmarking.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Encryption</h3>
                  <p className="text-sm text-muted-foreground">
                    AES-128 symmetric encryption via Python&apos;s Fernet library.
                    All email content is encrypted before storage.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Indexing</h3>
                  <p className="text-sm text-muted-foreground">
                    SHA-256 hash-based searchable tags with salted keys for
                    deterministic yet secure keyword lookup.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    Achieved 5,500x faster query times compared to baseline
                    linear search at 10,000 records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
