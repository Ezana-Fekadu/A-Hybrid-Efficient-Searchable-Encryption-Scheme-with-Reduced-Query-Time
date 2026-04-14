"use client";

import { Shield, Github, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">HESE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Hybrid Efficient Searchable Encryption Scheme with Reduced Query
              Time. Research project demonstrating hash-based indexing for encrypted
              data search.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Sections</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="#algorithms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Algorithms
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#complexity"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Complexity
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.kaggle.com/datasets/wcukierski/enron-email-dataset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Enron Dataset (Kaggle)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ezana-Fekadu/A-Hybrid-Efficient-Searchable-Encryption-Scheme-with-Reduced-Query-Time"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              CSC445 Bonus Assignment - Searchable Encryption Research Project
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Python, Cryptography, and Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
