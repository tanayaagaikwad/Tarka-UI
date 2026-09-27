import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '', priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-logo inline-flex items-center ${className}`}
      aria-label="Tarka Design Studio home"
    >
      <Image
        src="/tarka-logo.png"
        alt="Tarka Design Studio"
        width={591}
        height={591}
        priority={priority}
        className="h-auto w-full brightness-0 invert"
      />
    </Link>
  );
}
