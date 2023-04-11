import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as colorTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeProps = {
  inline?: boolean;
  className?: string;
  children: string | string[];
};

export default function Code({
  inline,
  className,
  children,
  ...props
}: CodeProps) {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter
      style={colorTheme}
      language={match[1].toLowerCase() ?? "language-shell"}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code {...props}>{children}</code>
  );
}
