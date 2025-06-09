
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import Logo from '@/assets/my-logo.png'
export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerLinks = {
    company: [
      { name: t('footer.about'), href: '#' },
      { name: t('footer.careers'), href: '#' },
      { name: t('footer.contact'), href: '#' },
      { name: t('footer.blog'), href: '#' },
    ],
    product: [
      { name: t('footer.features'), href: '#features' },
      { name: t('footer.pricing'), href: '#pricing' },
      { name: t('footer.security'), href: '#' },
      { name: t('footer.integrations'), href: '#' },
    ],
    support: [
      { name: t('footer.help_center'), href: '#' },
      { name: t('footer.documentation'), href: '#' },
      { name: t('footer.api'), href: '#' },
      { name: t('footer.status'), href: '#' },
    ],
    legal: [
      { name: t('footer.privacy'), href: '#' },
      { name: t('footer.terms'), href: '#' },
      { name: t('footer.cookies'), href: '#' },
    ],
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
           
              <div className="  rounded-lg flex items-center justify-center">
          <img src={Logo} alt="" className='w-[120px]' />

      
            
             
         
            </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              The all-in-one platform that helps teams ship faster with powerful collaboration tools.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">{t('footer.language')}</p>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-muted-foreground">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
