import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Safety Scanner — Scan Sponsor Content Before Publishing",
  description: "AI-powered brand safety scanner for YouTubers, TikTokers, and Instagram influencers. Detect violations, controversial topics, and compliance issues before publishing sponsored content."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f15a38f9-408f-4ea5-9750-46476b772726"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
