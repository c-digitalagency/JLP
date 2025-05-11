import React from 'react';
import { ShoppingBag } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-[3.5px] border-[#c20000] shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white p-2 rounded-lg shadow-sm border border-[#ffe8e8]">
              <ShoppingBag size={32} className="text-[#c20000]" />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-[#c20000] tracking-wide">
              Inter Negoce
            </span>
          </div>
          <div className="inline-block bg-gradient-to-r from-[#c20000] to-[#ed4242] text-white rounded-xl px-5 py-2 text-sm md:text-lg font-medium tracking-wide shadow-md border-2 border-[#ed4242]">
            Solutions pour Quincailliers, Revendeurs &amp; Professionnels exigeants
          </div>
        </div>
      </div>
    </header>
  );
};