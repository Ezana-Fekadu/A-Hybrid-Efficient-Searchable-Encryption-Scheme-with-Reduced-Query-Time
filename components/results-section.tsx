"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { size: 100, linear: 0.00624039, hybrid: 0.00008933, memory: 0.00405121 },
  { size: 500, linear: 0.0142131, hybrid: 0.00007434, memory: 0.0164719 },
  { size: 1000, linear: 0.032226, hybrid: 0.00008235, memory: 0.0332718 },
  { size: 2500, linear: 0.0837665, hybrid: 0.0000596, memory: 0.0691452 },
  { size: 5000, linear: 0.175936, hybrid: 0.00007611, memory: 0.138985 },
  { size: 10000, linear: 0.35041, hybrid: 0.000063, memory: 0.279228 },
];

const tableData = [
  { size: "100", linear: "6.24 ms", hybrid: "0.089 ms", memory: "4.05 KB", speedup: "70x" },
  { size: "500", linear: "14.21 ms", hybrid: "0.074 ms", memory: "16.47 KB", speedup: "191x" },
  { size: "1,000", linear: "32.23 ms", hybrid: "0.082 ms", memory: "33.27 KB", speedup: "391x" },
  { size: "2,500", linear: "83.77 ms", hybrid: "0.060 ms", memory: "69.15 KB", speedup: "1,406x" },
  { size: "5,000", linear: "175.94 ms", hybrid: "0.076 ms", memory: "138.99 KB", speedup: "2,311x" },
  { size: "10,000", linear: "350.41 ms", hybrid: "0.063 ms", memory: "279.23 KB", speedup: "5,562x" },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Experiments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Performance Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Benchmarking results comparing Linear and Hybrid search across different
            dataset sizes using the Enron Email Dataset.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-background border border-border text-center">
            <span className="text-4xl font-bold text-primary">5,562x</span>
            <p className="text-sm text-muted-foreground mt-2">
              Maximum speedup achieved at 10,000 records
            </p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border text-center">
            <span className="text-4xl font-bold text-foreground">0.063 ms</span>
            <p className="text-sm text-muted-foreground mt-2">
              Hybrid search time at 10,000 records
            </p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border text-center">
            <span className="text-4xl font-bold text-foreground">279 KB</span>
            <p className="text-sm text-muted-foreground mt-2">
              Memory overhead for index at 10,000 records
            </p>
          </div>
        </div>

        <div className="p-8 rounded-xl bg-background border border-border mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Query Time Comparison (Log Scale)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 22%)" />
                <XAxis
                  dataKey="size"
                  stroke="hsl(210, 15%, 60%)"
                  fontSize={12}
                  tickFormatter={(value) => `${value.toLocaleString()}`}
                  label={{
                    value: "Dataset Size (Emails)",
                    position: "insideBottom",
                    offset: -5,
                    fill: "hsl(210, 15%, 60%)",
                  }}
                />
                <YAxis
                  stroke="hsl(210, 15%, 60%)"
                  fontSize={12}
                  scale="log"
                  domain={[0.00001, 1]}
                  tickFormatter={(value) => `${value}s`}
                  label={{
                    value: "Query Time (seconds)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "hsl(210, 15%, 60%)",
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 18%, 13%)",
                    border: "1px solid hsl(220, 15%, 22%)",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "hsl(210, 20%, 90%)" }}
                  formatter={(value: number, name: string) => [
                    `${(value * 1000).toFixed(3)} ms`,
                    name === "linear" ? "Linear Search" : "Hybrid Search",
                  ]}
                  labelFormatter={(label) => `Dataset: ${label.toLocaleString()} emails`}
                />
                <Legend
                  formatter={(value) =>
                    value === "linear" ? "Linear Search (Baseline)" : "Hybrid Search (Ours)"
                  }
                />
                <Line
                  type="monotone"
                  dataKey="linear"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ fill: "#ef4444", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="hybrid"
                  stroke="hsl(173, 80%, 50%)"
                  strokeWidth={2}
                  dot={{ fill: "hsl(173, 80%, 50%)", strokeWidth: 2 }}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl bg-background border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-semibold text-foreground">
              Detailed Performance Table
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Dataset Size
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Linear Search
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Hybrid Search
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Memory Usage
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                    Speedup
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-mono text-foreground">
                      {row.size}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                      {row.linear}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                      {row.hybrid}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                      {row.memory}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono font-bold text-primary">
                      {row.speedup}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
