
import Link from 'next/link';
import { Logo } from '@/components/icons/logo';

export default function AppHeader() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
          <Logo className="h-8 w-8" />
          <h1 className="text-2xl font-bold">My Health Navigator</h1>
        </Link>
        {/* Future navigation items can go here */}
        {/* <nav>
          <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
        </nav> */}
      </div>
    </header>
  );
}

