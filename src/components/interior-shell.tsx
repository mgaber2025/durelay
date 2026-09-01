import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type InteriorShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  secondaryLink?: { href: string; label: string };
};

export function InteriorShell({ eyebrow, title, description, children, secondaryLink }: InteriorShellProps) {
  return (
    <>
      <Header />
      <main className="interior-main">
        <div className="shell interior-shell">
          <div className="interior-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="interior-description">{description}</p>
            {secondaryLink ? (
              <Link className="text-link" href={secondaryLink.href}>
                {secondaryLink.label} <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
          {children ? <div className="interior-panel">{children}</div> : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
