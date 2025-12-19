import React from 'react';
import { Globe, Server, Code, ShieldCheck, Zap, MapPin, ShoppingBag, Cpu, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: { [key: string]: React.ReactNode } = {
  'Globe': <Globe className="w-8 h-8" />,
  'Server': <Server className="w-8 h-8" />,
  'Code': <Code className="w-8 h-8" />,
  'ShieldCheck': <ShieldCheck className="w-8 h-8" />,
  'Zap': <Zap className="w-8 h-8" />,
  'MapPin': <MapPin className="w-8 h-8" />,
  'ShoppingBag': <ShoppingBag className="w-8 h-8" />,
  'Cpu': <Cpu className="w-8 h-8" />,
  'GraduationCap': <GraduationCap className="w-8 h-8" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Le Guichet Unique</span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl tracking-tight">Notre Offre Globale</h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            De l'infrastructure physique à la stratégie numérique : une solution intégrée pour votre croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <div className="p-4 bg-indigo-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-colors duration-300 shadow-sm">
                    {iconMap[service.iconName]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{service.title}</h3>
                    <div className="h-1 w-12 bg-indigo-100 mt-2 rounded-full group-hover:w-20 group-hover:bg-indigo-300 transition-all"></div>
                  </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature List */}
              {service.features && (
                <ul className="space-y-3 pt-6 border-t border-slate-50">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;