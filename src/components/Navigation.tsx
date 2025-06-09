
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/my-logo.png'
export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleSignIn = () => {
    navigate('/signin');
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    navigate('/signup');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="gradient-bg  w-[40px] h-[40px] rounded-lg flex items-center justify-center">
          <img src={Logo} alt="" className='w-[40px]' />
            </div>
   
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('nav.faq')}
              </button>
            </div>
          </div>

          {/* Desktop Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="outline" size="sm" onClick={handleSignIn}>
              Sign In
            </Button>
            <Button size="sm" className="gradient-bg border-0" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="w-9 h-9 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t">
              <button
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
              >
                {t('nav.testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
              >
                {t('nav.faq')}
              </button>
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full gradient-bg border-0" 
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
