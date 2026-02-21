'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/issues', label: 'Issues' },
  { href: '/faith-values', label: 'Faith & Values' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/about', label: 'About' },
  { href: '/join', label: 'Join' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:px-6" aria-label="Main navigation">
        <Link href="/" className="text-lg font-black uppercase tracking-wide text-civic">
          {siteConfig.name}
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-2 text-sm font-semibold md:gap-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                    active ? 'bg-civic text-paper' : 'text-ink hover:bg-civic hover:text-paper'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
