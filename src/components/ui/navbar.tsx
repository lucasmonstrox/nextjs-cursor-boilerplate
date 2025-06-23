import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 border-b border-border bg-background">
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="Logo" width={32} height={32} />
        <span className="font-bold text-lg">MonstroX</span>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};
