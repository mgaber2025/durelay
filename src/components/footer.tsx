import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <BrandLogo className="footer-logo" />
          <p>Durable webhook infrastructure for engineering teams.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/#product">Product</Link>
          <Link href="/#editions">Editions</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/#security">Security</Link>
          <Link href="/status">Status</Link>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Durelay. All rights reserved.</p>
        <div className="social-stubs" aria-label="Social links coming soon">
          <span aria-label="GitHub coming soon">GH</span>
          <span aria-label="LinkedIn coming soon">IN</span>
          <span aria-label="X coming soon">X</span>
        </div>
      </div>
    </footer>
  );
}
