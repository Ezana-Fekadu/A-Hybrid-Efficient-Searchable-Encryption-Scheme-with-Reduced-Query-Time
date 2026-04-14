"use client";

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

export function SampleDataSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 rounded-xl bg-card border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Dataset Sample
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Example entries showing plaintext snippets and their corresponding
            encrypted blobs from the Enron Email Dataset.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Plaintext (Snippet)
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Encrypted Blob (Snippet)
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-sm font-mono text-muted-foreground">
                      {i}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-muted-foreground max-w-xs truncate">
                      {row.plaintext}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-primary max-w-xs truncate">
                      {row.encrypted}
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
