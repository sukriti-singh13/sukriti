import React from 'react';

const Index = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`rounded-md border px-6 py-4 shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Index;
