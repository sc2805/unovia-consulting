// =============================================================================
// BlogContent — lightweight markdown-to-JSX renderer
// Supports: ## h2, ### h3, **bold**, > blockquote, - bullets, 1. numbered, paragraphs
// =============================================================================

"use client";

import React from "react";

type Token =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "p"; text: string }
  | { type: "blank" };

function parseBold(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-navy-800">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function tokenize(raw: string): Token[] {
  const lines = raw.split("\n");
  const tokens: Token[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trimEnd();

    if (line === "") {
      tokens.push({ type: "blank" });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      tokens.push({ type: "h2", text: line.slice(3) });
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      tokens.push({ type: "h3", text: line.slice(4) });
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      tokens.push({ type: "blockquote", text: line.slice(2) });
      i++;
      continue;
    }

    // Unordered list block
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trimEnd().startsWith("- ")) {
        items.push(lines[i].trimEnd().slice(2));
        i++;
      }
      tokens.push({ type: "ul", items });
      continue;
    }

    // Ordered list block
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trimEnd())) {
        items.push(lines[i].trimEnd().replace(/^\d+\. /, ""));
        i++;
      }
      tokens.push({ type: "ol", items });
      continue;
    }

    tokens.push({ type: "p", text: line });
    i++;
  }

  return tokens;
}

export default function BlogContent({ content }: { content: string }) {
  const tokens = tokenize(content.trim());

  return (
    <div className="prose-blog mt-8">
      {tokens.map((token, idx) => {
        switch (token.type) {
          case "blank":
            return null;

          case "h2":
            return (
              <h2
                key={idx}
                className="text-2xl font-bold text-navy-800 mt-10 mb-4 pb-2 border-b border-gray-100"
              >
                {token.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={idx}
                className="text-lg font-bold text-navy-700 mt-7 mb-3"
              >
                {token.text}
              </h3>
            );

          case "blockquote":
            return (
              <blockquote
                key={idx}
                className="my-6 pl-5 border-l-4 border-gold-400 bg-gold-50 py-4 pr-4 rounded-r-xl"
              >
                <p className="text-base text-navy-700 italic leading-relaxed">
                  {parseBold(token.text)}
                </p>
              </blockquote>
            );

          case "ul":
            return (
              <ul key={idx} className="my-4 space-y-2 pl-1">
                {token.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-gray-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    <span className="leading-relaxed">{parseBold(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={idx} className="my-4 space-y-2 pl-1">
                {token.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-100 text-navy-700 text-xs font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span className="leading-relaxed">{parseBold(item)}</span>
                  </li>
                ))}
              </ol>
            );

          case "p":
            return (
              <p
                key={idx}
                className="text-gray-600 leading-[1.85] mb-4 text-[1.0625rem]"
              >
                {parseBold(token.text)}
              </p>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
