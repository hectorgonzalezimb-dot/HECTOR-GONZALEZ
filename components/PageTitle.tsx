
import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  colorClass: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, colorClass }) => {
  return (
    <div className="mb-12 text-center">
      <h1 className={`text-4xl md:text-5xl font-bold ${colorClass}`}>{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
