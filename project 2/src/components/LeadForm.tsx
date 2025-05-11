import React, { useState } from 'react';
import { Check } from 'lucide-react';

const BUSINESS_TYPES = [
  'Menuiserie Bois',
  'Métallerie',
  'Menuiserie Aluminium',
  'Quincaillerie',
  'Autre'
];

export const LeadForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, business, businessType, phone });
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Merci {name} !
        </h3>
        <p className="text-gray-600">
          Votre commercial dédié vous contactera dans les 24h avec une offre personnalisée pour votre activité.
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet*
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c20000]"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email professionnel*
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c20000]"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone*
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c20000]"
          required
        />
      </div>
      
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
          Nom de votre entreprise*
        </label>
        <input
          type="text"
          id="business"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c20000]"
          required
        />
      </div>
      
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
          Type d'activité*
        </label>
        <select
          id="businessType"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c20000]"
          required
        >
          <option value="">Sélectionnez votre activité</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      <div className="!mt-6">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#c20000] to-[#ed4242] text-white py-3 px-4 rounded-md font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
        >
          RECEVOIR MON OFFRE PERSONNALISÉE
        </button>
      </div>
      
      <div className="text-xs text-gray-500 text-center">
        * En soumettant ce formulaire, vous acceptez d'être contacté par Inter Negoce concernant nos offres professionnelles.
      </div>
    </form>
  );
};