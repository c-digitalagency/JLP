import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t-2 border-[#c20000] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Inter Negoce</h3>
            <p className="text-gray-600 mb-4">
              Solutions professionnelles pour quincailliers, revendeurs et professionnels exigeants.
            </p>
            <div className="flex items-center text-gray-600 mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span>01 23 45 67 89</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@internegoce.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>123 Avenue Exemple, 75000 Paris</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#c20000] hover:underline">Accueil</a>
              </li>
              <li>
                <a href="#" className="text-[#c20000] hover:underline">Catalogue</a>
              </li>
              <li>
                <a href="#" className="text-[#c20000] hover:underline">Nos services</a>
              </li>
              <li>
                <a href="#" className="text-[#c20000] hover:underline">Témoignages</a>
              </li>
              <li>
                <a href="#" className="text-[#c20000] hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Inscrivez-vous pour recevoir nos dernières offres et actualités.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c20000]"
              />
              <button className="bg-[#c20000] text-white px-4 py-2 rounded-r-md hover:bg-[#ed4242] transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; 2025 Inter Negoce | Tous droits réservés
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-[#c20000] hover:underline">Mentions légales</a>
            <a href="#" className="text-sm text-[#c20000] hover:underline">Politique de confidentialité</a>
            <a href="#" className="text-sm text-[#c20000] hover:underline">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};