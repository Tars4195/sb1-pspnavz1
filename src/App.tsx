import React from 'react';
import { MessageSquare, Clock, Star, Shield, ArrowRight, MessageCircle, Home, Calendar } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Réponses Instantanées',
    description: 'AVA répond instantanément aux questions des voyageurs, 24/7'
  },
  {
    icon: Clock,
    title: 'Gain de Temps',
    description: "Économisez jusqu'à 5 heures par semaine sur la gestion des messages"
  },
  {
    icon: Star,
    title: 'Satisfaction Client',
    description: 'Améliorez vos notes et reviews grâce à des réponses rapides et précises'
  },
  {
    icon: Shield,
    title: 'Sécurité Garantie',
    description: 'Vos données sont protégées avec un cryptage de niveau bancaire'
  }
];

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Hôte Superhost Airbnb',
    content: 'AVA a complètement transformé ma façon de gérer mes locations. Je peux enfin profiter de mes soirées sans être constamment sur mon téléphone!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Pierre Dubois',
    role: 'Propriétaire Multi-locations',
    content: "Depuis que j'utilise AVA, mon taux de réponse est de 100% et mes réservations ont augmenté de 30%. Un investissement qui vaut vraiment le coup.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">AVA, votre assistante</span>
                <span className="block text-indigo-200">virtuelle pour Airbnb</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Automatisez vos réponses aux voyageurs et gagnez du temps précieux. AVA répond instantanément à vos clients, 24/7.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-150">
                  Essayer Gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600"
                  alt="Interface AVA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pourquoi choisir AVA ?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Une solution complète pour gérer vos communications avec vos voyageurs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <Icon className="w-8 h-8 text-indigo-600" />
                    <div className="space-y-2">
                      <p className="text-slate-800 font-medium">{feature.title}</p>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Des résultats prouvés
            </h2>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Temps économisé
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">5h/sem</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Taux de réponse
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Satisfaction client
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">98%</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-base text-indigo-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 text-gray-500">{testimonial.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Prêt à simplifier votre gestion ?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Commencez dès aujourd'hui et découvrez comment AVA peut transformer votre expérience d'hôte.
          </p>
          <button className="mt-8 w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 sm:w-auto">
            Démarrer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <MessageCircle className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Home className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Calendar className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 Avahome. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
