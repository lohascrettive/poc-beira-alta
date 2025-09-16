import React, { useState, useEffect } from 'react';
import { BarChart3, Briefcase, MessageCircle } from 'lucide-react';
import { Feature } from '../types';

const FeaturesSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features: Feature[] = [
    {
      id: 'analysis',
      title: 'Análise por Setores',
      description: 'Insights detalhados sobre performance por setor',
      icon: 'BarChart3',
      gradient: 'gradient-accent',
      items: [
        'Quantidade de não conformidades por setor',
        'Identificação de setores críticos',
        'Tendências temporais de ocorrências',
        'Comparativo entre departamentos'
      ]
    },
    {
      id: 'recommendations',
      title: 'Recomendações Específicas',
      description: 'Ações personalizadas para melhoria contínua',
      icon: 'Briefcase',
      gradient: 'gradient-secondary',
      items: [
        'Ações corretivas personalizadas',
        'Planos de melhoria contínua',
        'Priorização de intervenções',
        'Cronogramas de implementação'
      ]
    },
    {
      id: 'monitoring',
      title: 'Acompanhamento Total',
      description: 'Monitoramento em tempo real de indicadores',
      icon: 'MessageCircle',
      gradient: 'gradient-accent',
      items: [
        'Monitoramento de KPIs em tempo real',
        'Alertas de desvios de meta',
        'Análise de performance histórica',
        'Projeções e forecasting'
      ]
    }
  ];

  const iconMap = {
    BarChart3,
    Briefcase,
    MessageCircle,
  };

  if (!isLoaded) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded-lg mx-auto mb-4 w-96"></div>
              <div className="h-6 bg-gray-200 rounded-lg mx-auto mb-8 w-3/4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl p-8 h-80"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossa IA pode gerar para você
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nossa inteligência artificial especializada oferece insights profundos e acionáveis sobre seus dados de qualidade e conformidade
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div
                key={feature.id}
                className={`
                  relative overflow-hidden rounded-3xl p-8 shadow-lg hover:shadow-xl
                  transition-all duration-300 ${feature.gradient}
                  group cursor-pointer
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-primary-200 transition-shadow duration-300">
                    <IconComponent size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm">
                    {feature.description}
                  </p>

                  {/* Items List */}
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200/30 rounded-full opacity-20" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-200/20 rounded-full opacity-20" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  );
};

export default FeaturesSection;