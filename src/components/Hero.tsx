
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    
    <div className="relative container mx-auto px-4 sm:px-6   lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"> {/* Added grid classes here */}
        <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0"> {/* Adjusted text alignment and margin */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="gradient-text">{t('hero.headline')}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}> {/* Adjusted margin */}
            {t('hero.subheadline')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.4s'}}> {/* Adjusted button alignment */}
            <Button size="lg" className="gradient-bg border-0 text-lg px-8 py-3">
              {t('hero.cta')}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
              {t('hero.secondary_cta')}
            </Button>
          </div>
        </div>
        
        {/* Demo image placeholder */}
        <div className="mt-16 lg:mt-0 animate-scale-in" style={{animationDelay: '0.6s'}}> {/* Adjusted margin for large screens */}
          <div className="relative max-w-4xl mx-auto lg:max-w-full"> {/* Adjusted max-width for large screens */}
            <div className="relative rounded-xl bg-card border shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Platform Dashboard"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
