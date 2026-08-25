"use client";
import React from 'react';
import { 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaLocationDot, 
  FaPhone, 
  FaEnvelope, 
  FaChevronUp 
} from 'react-icons/fa6';

const SOCIAL_LINKS = [
  { id: 'linkedin', icon: FaLinkedinIn, href: '#' },
  { id: 'facebook', icon: FaFacebookF, href: '#' },
  { id: 'instagram', icon: FaInstagram, href: '#' },
  { id: 'twitter', icon: FaXTwitter, href: '#' },
];

const NAVIGATION_COLUMNS = [
  {
    title: 'Solutions',
    links: [
      { label: 'Commerce & Online', href: '#' },
      { label: 'Retail POS', href: '#' },
      { label: 'Wholesale & Supply Chain', href: '#' },
      { label: 'Service and Consultant', href: '#' },
      { label: 'Enterprise ERP', href: '#' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'All Modules', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const CONTACT_INFO = [
  {
    id: 'location',
    icon: FaLocationDot,
    content: 'Level 9, Manama MS Toren, Gulshan Badda Link Road, Dhaka-1212',
    href: null,
  },
  {
    id: 'phone',
    icon: FaPhone,
    content: '+88 01896 263647',
    href: 'tel:+8801896263647',
  },
  {
    id: 'email',
    icon: FaEnvelope,
    content: 'sales@tallydesk.com',
    href: 'mailto:sales@tallydesk.com',
  },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms And Conditions', href: '#' },
];

// Reusable title underline decorator
const TitleUnderline = () => (
  <div className="flex items-center gap-1.5 mb-4 mt-2">
    <div className="w-5 bg-blue-600 h-1 rounded-full"></div>
    <div className="w-1.5 bg-blue-600 h-1 rounded-full"></div>
    <div className="w-1.5 bg-blue-600 h-1 rounded-full"></div>
    <div className="w-1.5 bg-blue-600 h-1 rounded-full"></div>
  </div>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] text-gray-400 font-sans text-xs relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <img 
              src="https://plain-apac-prod-public.komododecks.com/202608/24/P9Qchgv4VHbjOAGy1r59/image.png" 
              alt="Flowzen Logo" 
              className="h-8 sm:h-9 object-contain"
            />
          </div>
          <p className="text-[11px] sm:text-xs leading-relaxed text-gray-400 max-w-xs">
            Flowzen A Taskco product. One platform, built to grow with every kind of business in Bangladesh.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2 text-white">
            {SOCIAL_LINKS.map(({ id, icon: Icon, href }) => (
              <a 
                key={id} 
                href={href} 
                className="w-8 h-8 sm:w-7 sm:h-7 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors"
                aria-label={id}
              >
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Navigation Columns (Solutions & Platform) */}
        {NAVIGATION_COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className="text-white font-semibold text-sm">{column.title}</h3>
            <TitleUnderline />
            <ul className="space-y-2.5 sm:space-y-3 text-[12px]">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 4: Find Us */}
        <div>
          <h3 className="text-white font-semibold text-sm">Find Us</h3>
          <TitleUnderline />
          <ul className="space-y-3.5 text-[12px]">
            {CONTACT_INFO.map(({ id, icon: Icon, content, href }) => (
              <li key={id} className="flex items-start gap-3">
                <Icon className="text-blue-500 mt-0.5 shrink-0" size={13} />
                {href ? (
                  <a href={href} className="hover:text-white transition-colors break-all sm:break-normal">
                    {content}
                  </a>
                ) : (
                  <span className="leading-snug">{content}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="fixed sm:absolute right-4 sm:right-6 lg:right-8 bottom-4 sm:bottom-8 lg:bottom-12 bg-blue-600 hover:bg-blue-500 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-xl transition-all z-50 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={12} />
        </button>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left text-[11px] text-gray-500">
          <p>
            © Copyright 2025 <span className="text-blue-400">Flowzen</span>, A Product Of{' '}
            <span className="text-blue-400">Taskco</span> | All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;