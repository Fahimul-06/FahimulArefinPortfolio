import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullHeight = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 ${fullHeight ? 'min-h-screen flex flex-col justify-center' : ''} ${className}`}
    >
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;