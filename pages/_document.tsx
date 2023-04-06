import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-background dark:text-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
