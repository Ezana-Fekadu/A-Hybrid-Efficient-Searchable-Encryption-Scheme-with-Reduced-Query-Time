"use client";

import { useState } from "react";

const algorithms = [
  {
    id: "linear",
    name: "Linear Search",
    badge: "Baseline",
    badgeColor: "bg-destructive/20 text-destructive",
    description:
      "Sequential scan through all encrypted entries. Decrypts each item to check for matches.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    pros: ["Simple implementation", "No preprocessing required", "Works with any data"],
    cons: ["Slow for large datasets", "CPU intensive (decryption)", "Scales poorly"],
    code: `def linear_search(store, target):
    """O(n) - Decrypts every entry sequentially."""
    for enc_blob in store:
        decrypted = CIPHER.decrypt(enc_blob).decode('utf-8')
        if decrypted == target:
            return True
    return False`,
  },
  {
    id: "binary",
    name: "Binary Search",
    badge: "Optimized",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    description:
      "Search on sorted hash tags using divide-and-conquer. Requires preprocessing to sort indices.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(n)",
    pros: ["Efficient lookup", "Good for sorted data", "Logarithmic scaling"],
    cons: ["Requires sorted index", "Preprocessing overhead", "Updates are expensive"],
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
    id: "hybrid",
    name: "Hybrid Search",
    badge: "Main Contribution",
    badgeColor: "bg-primary/20 text-primary",
    description:
      "Hash map-based instant lookup with single decryption for verification. Our main contribution.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    pros: ["Instant lookup", "Constant time regardless of size", "Efficient verification"],
    cons: ["Memory overhead for index", "Hash collision potential", "Index construction time"],
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

export function AlgorithmsSection() {
  const [activeTab, setActiveTab] = useState("hybrid");

  const activeAlgorithm = algorithms.find((a) => a.id === activeTab)!;

  return (
    <section id="algorithms" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Implementation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Search Algorithms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three distinct approaches to searching encrypted data, each with unique
            performance characteristics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              onClick={() => setActiveTab(algo.id)}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                activeTab === algo.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {algo.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-foreground">
                {activeAlgorithm.name}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${activeAlgorithm.badgeColor}`}
              >
                {activeAlgorithm.badge}
              </span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {activeAlgorithm.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-background border border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Time Complexity
                </span>
                <p className="text-xl font-mono font-bold text-primary mt-1">
                  {activeAlgorithm.timeComplexity}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Space Complexity
                </span>
                <p className="text-xl font-mono font-bold text-foreground mt-1">
                  {activeAlgorithm.spaceComplexity}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {activeAlgorithm.pros.map((pro, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Trade-offs
                </h4>
                <ul className="space-y-2">
                  {activeAlgorithm.cons.map((con, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#0d1117] border border-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-border">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">
                {activeAlgorithm.id}_search.py
              </span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-[#c9d1d9] leading-relaxed">
                {activeAlgorithm.code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
