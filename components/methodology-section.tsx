"use client";

const steps = [
  {
    number: "01",
    title: "Dataset Preparation",
    description:
      "Load and prepare the Enron Email Dataset. Extract email bodies and create subsets of varying sizes (100, 500, 1000, 2500, 5000, 10000) for scalability testing.",
    details: [
      "Download Enron dataset from Kaggle",
      "Parse email messages from CSV",
      "Create test subsets of varying sizes",
      "Validate data integrity",
    ],
  },
  {
    number: "02",
    title: "Encryption & Indexing",
    description:
      "Encrypt all email content using AES-128 (Fernet) and create searchable indices. Generate SHA-256 hash tags with salt for secure keyword mapping.",
    details: [
      "Generate symmetric encryption key",
      "Encrypt plaintext to ciphertext blobs",
      "Create hash-based inverted index",
      "Build sorted index for binary search",
    ],
  },
  {
    number: "03",
    title: "Algorithm Implementation",
    description:
      "Implement three search algorithms: Linear (baseline), Binary (sorted index), and Hybrid (hash map). Each with distinct time-space tradeoffs.",
    details: [
      "Linear: Sequential scan with decryption",
      "Binary: Sorted tags with O(log n) lookup",
      "Hybrid: Hash map with O(1) lookup",
      "Verify correctness across all methods",
    ],
  },
  {
    number: "04",
    title: "Performance Benchmarking",
    description:
      "Measure execution time and memory usage across different dataset sizes. Use worst-case scenarios (searching for last item) for consistent benchmarking.",
    details: [
      "High-precision timing with perf_counter",
      "Memory profiling for index structures",
      "Multiple runs for statistical validity",
      "Scalability analysis across sizes",
    ],
  },
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Research Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Methodology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to implementing, benchmarking, and analyzing
            searchable encryption algorithms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-8 rounded-xl bg-background border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="absolute -top-4 left-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  Step {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
