import React from 'react';
import { Timer } from './Timer';
import { LeadForm } from './LeadForm';
import { PenTool as Tool, Ruler, Wrench } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white shadow-md overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Professional Categories */}
          <div className="bg-gradient-to-br from-[#ffe8e8] to-white p-6 md:w-1/3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#c20000] mb-4">Solutions pour Professionnels</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <Tool className="h-6 w-6 text-[#c20000]" />
                  <span className="font-medium">Menuisiers Bois</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <Wrench className="h-6 w-6 text-[#c20000]" />
                  <span className="font-medium">Métalliers</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <Ruler className="h-6 w-6 text-[#c20000]" />
                  <span className="font-medium">Menuisiers Aluminium</span>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[300px] relative">
              <iframe 
                src="https://catalogue.quartdetour.net/view/786128227/i/#zoom=true"
                title="Catalogue Inter Negoce" 
                className="w-full h-full rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>
          
          {/* Lead Generation */}
          <div className="flex-1 p-6 md:p-10 flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="bg-gradient-to-r from-[#c20000] to-[#ed4242] text-white p-6 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  🔥 Offre Exclusive Professionnels
                </h2>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#ffe8e8]">✓</span>
                    <span>Accès prioritaire aux nouveautés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ffe8e8]">✓</span>
                    <span>Tarifs préférentiels garantis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ffe8e8]">✓</span>
                    <span>Commercial dédié à votre activité</span>
                  </li>
                </ul>
                <p className="text-[#ffe8e8] font-semibold text-sm">
                  Plus de 500 professionnels nous font déjà confiance !
                </p>
              </div>
              
              <div className="mb-6 text-center">
                <div className="text-[#c20000] font-bold text-lg">
                  ⚡ Cette offre expire dans :
                </div>
                <Timer initialMinutes={30} initialSeconds={0} />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-center mb-4">
                  Recevez votre offre personnalisée
                </h3>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};