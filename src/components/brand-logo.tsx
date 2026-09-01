import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <Link className={`brand-logo ${className}`} href="/" aria-label="Durelay home">
      <Image
        src="/brand/durelay-logo-dark.svg"
        alt="Durelay"
        width={1023}
        height={270}
        priority={priority}
      />
    </Link>
  );
}
