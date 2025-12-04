import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about/' },
    { name: 'خدماتنا', path: '/services/' },
    { name: 'الخطوات', path: '/service-steps/' },
    { name: 'الأسئلة الشائعة', path: '/faq/' },
    { name: 'تواصل', path: '/contact/' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
      <div className="container-custom">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3 space-x-reverse transition-all duration-300" aria-label="العودة للصفحة الرئيسية">
            {/* Plain logo without background */}
            <img
              src={logoImg}
              alt="شراء سيارات تشليح - لوجو"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              loading="eager"
              decoding="sync"
            />
            {/* Brand text */}
            <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-primary">
              شراء سيارات تشليح
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 space-x-reverse">
            <Button variant="whatsapp" size="sm" className="rounded-full px-4" asChild>
              <a href="https://wa.me/966553668948" className="flex items-center">
                <MessageCircle className="h-4 w-4 ml-2" />
                واتساب
              </a>
            </Button>
            <Button variant="default" size="sm" className="rounded-full px-4" asChild>
              <a href="tel:0553668948" className="flex items-center">
                <Phone className="h-4 w-4 ml-2" />
                اتصل
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent"
            aria-label="فتح القائمة"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-border/40">
                <Button variant="whatsapp" size="sm" asChild>
                  <a href="https://wa.me/966553668948" className="flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 ml-2" />
                    واتساب
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:0553668948" className="flex items-center justify-center">
                    <Phone className="h-4 w-4 ml-2" />
                    اتصل
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;