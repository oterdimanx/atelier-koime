import { ReactNode } from 'react';
import { Instagram } from 'lucide-react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <footer className="border-t border-border mt-16">
        <div className="section-container py-8 flex items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/atelierkoime"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink hover:text-pink/70 transition-all duration-300 hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={18} />
          </a>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 1:1 Art Lessons. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
