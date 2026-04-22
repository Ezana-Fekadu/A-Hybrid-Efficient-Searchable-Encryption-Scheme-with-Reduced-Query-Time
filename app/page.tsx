"use client";

import { useState } from "react";

const performanceData = [
  { size: 100, linear: 0.00624, hybrid: 0.000089, speedup: 70 },
  { size: 500, linear: 0.01421, hybrid: 0.000074, speedup: 192 },
  { size: 1000, linear: 0.03223, hybrid: 0.000082, speedup: 393 },
  { size: 2500, linear: 0.08377, hybrid: 0.000060, speedup: 1396 },
  { size: 5000, linear: 0.17594, hybrid: 0.000076, speedup: 2315 },
  { size: 10000, linear: 0.35041, hybrid: 0.000063, speedup: 5562 },
];

const sampleData = [
  {
    plaintext: "Message-ID: <18782981.1075855378110.JavaMail.evans...",
    encrypted: "b'gAAAAABp1SIdM4RMfjQ-wL1Tww7HSAOi_76CitVQ'...",
  },
  {
    plaintext: "Message-ID: <15464986.1075855378456.JavaMail.evans...",
    encrypted: "b'gAAAAABp1SId4e-4Sca9P7txxXxYA0b6rF8RMnYi'...",
  },
  {
    plaintext: "Message-ID: <24216240.1075855687451.JavaMail.evans...",
    encrypted: "b'gAAAAABp1SIdwtlOra0ZxvWlF161qkiCrqlJ0nRk'...",
  },
];

const algorithms = [
  {
    name: "Linear Search",
    complexity: "O(n)",
    space: "O(1)",
    description: "Decrypts every entry sequentially until match found",
    code: `def linear_search(store, target):
    """O(n) - Decrypts every entry sequentially."""
    for enc_blob in store:
        decrypted = CIPHER.decrypt(enc_blob).decode('utf-8')
        if decrypted == target:
            return True
    return False`,
  },
  {
    name: "Binary Search",
    complexity: "O(log n)",
    space: "O(n)",
    description: "Search on sorted hash tags with logarithmic time",
    code: `def binary_search(b_index, store, target):
    """O(log n) - Search on sorted hash tags."""
    target_tag = hashlib.sha256(
        target.encode('utf-8') + SALT
    ).hexdigest()
    low, high = 0, len(b_index) - 1
    while low <= high:
        mid = (low + high) // 2
        if b_index[mid][0] == target_tag:
            return True
        elif b_index[mid][0] < target_tag:
            low = mid + 1
        else:
            high = mid - 1
    return False`,
  },
  {
    name: "Hybrid Search",
    complexity: "O(1)",
    space: "O(n)",
    description: "Instant lookup via Hash Map - Our main contribution",
    code: `def hybrid_search(h_index, store, target):
    """O(1) - Instant lookup via Hash Map."""
    target_tag = hashlib.sha256(
        target.encode('utf-8') + SALT
    ).hexdigest()
    idx = h_index.get(target_tag)
    if idx is not None:
        # Single decryption for verification
        CIPHER.decrypt(store[idx])
        return True
    return False`,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-primary">HESE</h1>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#algorithms" className="hover:text-foreground transition-colors">Algorithms</a>
            <a href="#performance" className="hover:text-foreground transition-colors">Performance</a>
            <a href="#data" className="hover:text-foreground transition-colors">Data</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            CSC 445 Project
          </div>
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Hybrid Efficient Searchable Encryption
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-6">
            Implementing and comparing searchable encryption algorithms on the Enron Email Dataset 
            with up to <span className="text-primary font-semibold">5,500x speedup</span> over baseline.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/Ezana-Fekadu/A-Hybrid-Efficient-Searchable-Encryption-Scheme-with-Reduced-Query-Time"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              View on GitHub
            </a>
            <a 
              href="https://www.kaggle.com/datasets/wcukierski/enron-email-dataset"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors"
            >
              Enron Dataset
            </a>
          </div>
        </section>

        <section id="algorithms" className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Search Algorithms</h3>
          
          <div className="flex gap-2 mb-6">
            {algorithms.map((algo, idx) => (
              <button
                key={algo.name}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === idx
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {algo.name}
              </button>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-4 mb-2">
                <h4 className="text-lg font-semibold">{algorithms[activeTab].name}</h4>
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-sm rounded">
                  {algorithms[activeTab].complexity}
                </span>
                <span className="px-2 py-0.5 bg-muted text-muted-foreground text-sm rounded">
                  Space: {algorithms[activeTab].space}
                </span>
              </div>
              <p className="text-muted-foreground">{algorithms[activeTab].description}</p>
            </div>
            <pre className="p-6 overflow-x-auto bg-black/50">
              <code className="text-sm font-mono text-foreground whitespace-pre">
                {algorithms[activeTab].code}
              </code>
            </pre>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Core Encryption and Indexing</h3>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border">
              <p className="text-muted-foreground">
                The hybrid approach creates both a sorted binary index and a hash map for O(1) lookups.
              </p>
            </div>
            <pre className="p-6 overflow-x-auto bg-black/50">
              <code className="text-sm font-mono text-foreground whitespace-pre">{`def encrypt_and_index(data_list):
    """Encrypts data and prepares Binary & Hybrid Indices."""
    encrypted_store = []
    binary_index = []   # List of tuples (hash, original_index)
    hybrid_index = {}   # Dict for O(1) lookup

    for i, item in enumerate(data_list):
        # 1. Encrypt plaintext for the 'Cloud Store'
        enc_blob = CIPHER.encrypt(item.encode('utf-8'))
        encrypted_store.append(enc_blob)

        # 2. Create Searchable Tag (SHA-256)
        tag = hashlib.sha256(item.encode('utf-8') + SALT).hexdigest()

        binary_index.append((tag, i))
        hybrid_index[tag] = i

    # Sort for Binary Search
    binary_index.sort()
    return encrypted_store, binary_index, hybrid_index`}</code>
            </pre>
          </div>
        </section>

        <section id="performance" className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Performance Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground text-sm mb-1">Max Speedup</p>
              <p className="text-3xl font-bold text-primary">5,562x</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground text-sm mb-1">Hybrid Query Time</p>
              <p className="text-3xl font-bold">63 <span className="text-lg text-muted-foreground">us</span></p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground text-sm mb-1">Dataset Size</p>
              <p className="text-3xl font-bold">10,000</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Size</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Linear (s)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Hybrid (s)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Speedup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {performanceData.map((row) => (
                    <tr key={row.size} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm">{row.size.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{row.linear.toFixed(5)}</td>
                      <td className="px-6 py-4 text-sm text-primary">{row.hybrid.toFixed(6)}</td>
                      <td className="px-6 py-4 text-sm font-semibold">{row.speedup.toLocaleString()}x</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="data" className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Sample Encrypted Data</h3>
          <p className="text-muted-foreground mb-4">
            Emails from the Enron dataset encrypted using Fernet (AES-128).
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Plaintext (Snippet)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Encrypted Blob</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sampleData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono">{row.plaintext}</td>
                      <td className="px-6 py-4 text-sm font-mono text-primary">{row.encrypted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Complexity Analysis</h3>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Algorithm</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Time</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Space</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 text-sm">Linear</td>
                    <td className="px-6 py-4 text-sm font-mono">O(N)</td>
                    <td className="px-6 py-4 text-sm font-mono">O(1)</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">CPU Intensive (Decryption)</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 text-sm">Binary</td>
                    <td className="px-6 py-4 text-sm font-mono">O(log N)</td>
                    <td className="px-6 py-4 text-sm font-mono">O(N)</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Efficient lookup</td>
                  </tr>
                  <tr className="hover:bg-muted/50 bg-primary/5">
                    <td className="px-6 py-4 text-sm font-semibold text-primary">Hybrid (Ours)</td>
                    <td className="px-6 py-4 text-sm font-mono text-primary">O(1)</td>
                    <td className="px-6 py-4 text-sm font-mono">O(N)</td>
                    <td className="px-6 py-4 text-sm text-primary">Instant lookup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>Hybrid Efficient Searchable Encryption Scheme</p>
          <p className="mt-1">CSC 445 Bonus Assignment</p>
        </div>
      </footer>
    </div>
  );
}
