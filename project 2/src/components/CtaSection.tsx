import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#c20000] to-[#ed4242] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Prêt à booster votre activité?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Ne laissez pas passer cette opportunité exclusive. Nos commerciaux sont prêts à vous accompagner pour développer votre activité.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#top" 
            className="inline-flex items-center justify-center bg-white text-[#c20000] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contactez-nous maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="tel:+33123456789" 
            className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-[#c20000] transition-all duration-300"
          >
            Appelez au 01 23 45 67 89
          </a>
        </div>
      </div>
    </section>
  );
};