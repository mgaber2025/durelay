import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const heroDescription =
  "Durelay accepts, verifies, and delivers webhook traffic in milliseconds — then keeps retrying until it lands. One relay layer for every tenant, every destination, every queue.";

export const metadata: Metadata = {
  metadataBase: new URL("https://durelay.com"),
  title: {
    default: "Durelay — Multi-Tenant Webhook Relay Platform",
    template: "%s — Durelay",
  },
  description:
    "Durelay accepts, verifies, and reliably delivers webhook traffic — fan it out to every destination or drop it into a durable queue. Built for engineering teams who don't want to rebuild this themselves.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/durelay-icon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/durelay-icon.svg",
    apple: "/brand/durelay-circle-blue.svg",
  },
  openGraph: {
    type: "website",
    url: "https://durelay.com",
    siteName: "Durelay",
    title: "Relay webhooks. Reliably. At scale.",
    description: heroDescription,
  },
  twitter: {
    card: "summary",
    title: "Relay webhooks. Reliably. At scale.",
    description: heroDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
