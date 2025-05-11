import React from 'react';
import { TrendingUp, UserCheck, Clock, Package, Percent, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: <UserCheck className="h-10 w-10 text-[#c20000]" />,
    title: "Commercial dédié",
    description: "Un expert spécialisé dans votre secteur d'activité pour un accompagnement sur-mesure."
  },
  {
    icon: <Percent className="h-10 w-10 text-[#c20000]" />,
    title: "Tarifs préférentiels",
    description: "Des remises exclusives adaptées à votre volume d'activité."
  },
  {
    icon: <Package className="h-10 w-10 text-[#c20000]" />,
    title: "Stock garanti",
    description: "Accès prioritaire aux produits et garantie de disponibilité."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-[#c20000]" />,
    title: "Suivi personnalisé",
    description: "Optimisation continue de vos commandes selon vos besoins spécifiques."
  },
  {
    icon: <Headphones className="h-10 w-10 text-[#c20000]" />,
    title: "Support prioritaire",
    description: "Une ligne dédiée pour répondre à toutes vos questions."
  },
  {
    icon: <Clock className="h-10 w-10 text-[#c20000]" />,
    title: "Livraison express",
    description: "Service de livraison rapide pour vos commandes urgentes."
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#c20000] mb-12">
          Les avantages exclusifs Inter Negoce
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#c20000] mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};