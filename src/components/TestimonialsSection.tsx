import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jean Dupont",
    business: "Quincaillerie Dupont",
    quote: "Depuis que nous travaillons avec Inter Negoce, notre chiffre d'affaires a augmenté de 30%. Leur commercial comprend parfaitement nos besoins et nous propose toujours les produits qui se vendent le mieux.",
    stars: 5
  },
  {
    name: "Marie Laurent",
    business: "Bricolage Expert",
    quote: "Le service client d'Inter Negoce est exceptionnel. Notre commercial est toujours disponible et réactif. C'est un vrai partenaire pour notre entreprise.",
    stars: 5
  },
  {
    name: "Philippe Martin",
    business: "Outillage Pro",
    quote: "Les produits sont de qualité et les prix sont compétitifs. Notre commercial nous conseille parfaitement sur les tendances du marché.",
    stars: 4
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          Ce que disent nos clients
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Découvrez pourquoi les professionnels font confiance à Inter Negoce
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.business}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};