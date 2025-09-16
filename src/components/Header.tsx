import React from 'react';
import { MessageCircle, BarChart3, ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const { isApiConnected } = useApp();

  const handleLookerRedirect = () => {
    window.open('https://creattives.cloud.looker.com/dashboards/86?Data+Date=this+year&Nome+indicadores=&Responsavel=', '_blank');
  };

  const navItems = [
    { id: 'chat', label: 'Chat IA', icon: MessageCircle, isExternal: false },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, isExternal: true },
  ] as const;

  return (
    <header className="bg-white border-b-2 border-primary-600 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Beira Alta Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/beiraalta.png" 
              alt="Beira Alta Industrial" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isExternal = item.isExternal;
              
              return (
                <button
                  key={item.id}
                  onClick={() => isExternal ? handleLookerRedirect() : undefined}
                  className={`
                    flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200
                    ${!isExternal
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                  {isExternal && <ExternalLink size={14} />}
                </button>
              );
            })}
          </nav>

          {/* Farol 360 Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/CREATTIVE - PLANO DE PRODUTOS (3).png" 
              alt="Farol 360" 
              className="h-8 w-auto"
            />
            {/* Status da API */}
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${isApiConnected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <span className="text-xs text-gray-500">
                {isApiConnected ? 'Conectado' : 'Modo Offline'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
