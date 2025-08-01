import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

// Optional: custom heading renderer for anchor links
const HeadingRenderer = (level: number) => {
  return ({ children }: { children: React.ReactNode }) => {
    const text = React.Children.toArray(children).join("");
    const slug = text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    // Use React.createElement to avoid JSX namespace issues
    return React.createElement(
      `h${level}`,
      { id: slug },
      <>
        <a href={`#${slug}`} className="anchor-link" />
        {children}
      </>
    );
  };
};

export function CustomMD({ source }: { source: string }) {
  const components: Components = {
    h1: HeadingRenderer(1) as any,
    h2: HeadingRenderer(2) as any,
    h3: HeadingRenderer(3) as any,
    h4: HeadingRenderer(4) as any,
    // You can add custom renderers for images, links, etc. here
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {source}
    </ReactMarkdown>
  );
}