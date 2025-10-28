'use client';
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 px-6 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-800">{title}</h2>
          <span className="text-gray-500">
            {isOpen ? (
              <i className="fas fa-minus"></i>
            ) : (
              <i className="fas fa-plus"></i>
            )}
          </span>
        </div>
      </button>
      {isOpen && <div className="py-4 px-6 text-gray-600">{children}</div>}
    </div>
  );
};

export default AccordionItem;
