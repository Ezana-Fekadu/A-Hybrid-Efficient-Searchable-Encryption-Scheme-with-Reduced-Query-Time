"use client";

const complexityData = [
  {
    algorithm: "Linear Search",
    timeBest: "O(1)",
    timeAvg: "O(n)",
    timeWorst: "O(n)",
    space: "O(1)",
    description:
      "Must decrypt every entry until match is found. Best case when target is first element.",
  },
  {
    algorithm: "Binary Search",
    timeBest: "O(1)",
    timeAvg: "O(log n)",
    timeWorst: "O(log n)",
    space: "O(n)",
    description:
      "Requires sorted index. Divides search space in half with each comparison.",
  },
  {
    algorithm: "Hybrid Search",
    timeBest: "O(1)",
    timeAvg: "O(1)",
    timeWorst: "O(1)",
    space: "O(n)",
    description:
      "Hash map lookup is constant time. Only performs one decryption for verification.",
    highlight: true,
  },
];

export function ComplexitySection() {
  return (
    <section id="complexity" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Analysis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Complexity Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Theoretical analysis of time and space complexity for each algorithm.
          </p>
        </div>

        <div className="rounded-xl bg-card border border-border overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Algorithm
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Best Case
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Average
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Worst Case
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Space
                  </th>
                </tr>
              </thead>
              <tbody>
                {complexityData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-border ${
                      row.highlight ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span
                        className={`font-medium ${
                          row.highlight ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {row.algorithm}
                      </span>
                      {row.highlight && (
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                          Ours
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-mono text-sm text-muted-foreground">
                      {row.timeBest}
                    </td>
                    <td
                      className={`px-6 py-4 text-center font-mono text-sm ${
                        row.highlight ? "text-primary font-bold" : "text-muted-foreground"
                      }`}
                    >
                      {row.timeAvg}
                    </td>
                    <td className="px-6 py-4 text-center font-mono text-sm text-muted-foreground">
                      {row.timeWorst}
                    </td>
                    <td className="px-6 py-4 text-center font-mono text-sm text-muted-foreground">
                      {row.space}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {complexityData.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border ${
                item.highlight
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-border"
              }`}
            >
              <h3
                className={`font-semibold mb-3 ${
                  item.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {item.algorithm}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-card border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Key Insight: The Space-Time Tradeoff
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our hybrid approach trades additional memory (O(n) for the hash index) for
            dramatically improved query time (O(1) vs O(n)). For the Enron dataset at
            10,000 records:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Memory overhead: ~279 KB (negligible for modern systems)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Time saved: 350.35 ms per query (5,562x improvement)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              This tradeoff becomes even more favorable at larger scales
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
