import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          data-domain="hunterheston.com"
          src="https://plausible.io/js/script.outbound-links.js"
        ></script>
      </Head>
      <body className="dark:bg-background dark:text-primary selection:bg-accent selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
