import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-ink bg-civic text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="max-w-xl text-sm">Choose Your Values is a public-awareness campaign focused on mercy, freedom, truth, justice, and neighbor-love.</p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/downloads" className="hover:text-gold">Downloads</Link>
          <Link href="/join" className="hover:text-gold">Join</Link>
          <Link href="/about" className="hover:text-gold">About</Link>
        </div>
      </div>
    </footer>
  );
}
