
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      description: t('pricing.starter.description'),
      features: t('pricing.starter.features', { returnObjects: true }) as string[],
      cta: t('pricing.starter.cta'),
      popular: false,
    },
    {
      name: t('pricing.pro.name'),
      price: t('pricing.pro.price'),
      period: t('pricing.pro.period'),
      description: t('pricing.pro.description'),
      features: t('pricing.pro.features', { returnObjects: true }) as string[],
      cta: t('pricing.pro.cta'),
      popular: true,
      popularText: t('pricing.pro.popular'),
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      description: t('pricing.enterprise.description'),
      features: t('pricing.enterprise.features', { returnObjects: true }) as string[],
      cta: t('pricing.enterprise.cta'),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${
              plan.popular ? 'border-primary shadow-lg scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">
                    {plan.popularText}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'gradient-bg border-0' : ''}`} 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
