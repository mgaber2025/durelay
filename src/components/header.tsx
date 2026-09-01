import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const links = [
  { href: "/#product", label: "Product" },
  { href: "/#editions", label: "Editions" },
  { href: "/docs", label: "Docs" },
  { href: "/#security", label: "Security" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <BrandLogo className="nav-logo" priority />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-primary nav-cta" href="/signup">
          Start Building
        </Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="button button-primary" href="/signup">
              Start Building
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
