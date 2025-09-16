import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Target,
  PieChart,
  Activity,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total de Não Conformidades',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: AlertTriangle,
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Taxa de Conformidade',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Tempo Médio de Resolução',
      value: '3.2 dias',
      change: '-15%',
      trend: 'down',
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'KPIs em Meta',
      value: '18/20',
      change: '+2',
      trend: 'up',
      icon: Target,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const sectors = [
    { name: 'Produção', nonConformities: 8, trend: 'up' },
    { name: 'Qualidade', nonConformities: 5, trend: 'down' },
    { name: 'Manutenção', nonConformities: 6, trend: 'up' },
    { name: 'Logística', nonConformities: 3, trend: 'down' },
    { name: 'Administrativo', nonConformities: 2, trend: 'stable' }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'warning',
      message: 'Nova não conformidade detectada no setor Produção',
      time: '2 min atrás',
      icon: AlertTriangle
    },
    {
      id: 2,
      type: 'success',
      message: 'Ação corretiva implementada com sucesso',
      time: '15 min atrás',
      icon: CheckCircle
    },
    {
      id: 3,
      type: 'info',
      message: 'Relatório mensal de qualidade gerado',
      time: '1 hora atrás',
      icon: Activity
    },
    {
      id: 4,
      type: 'warning',
      message: 'KPI abaixo da meta no setor Manutenção',
      time: '2 horas atrás',
      icon: Target
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleLookerRedirect = () => {
    window.open('https://creattives.cloud.looker.com/login', '_blank');
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Visão geral dos indicadores de qualidade e não conformidades</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLookerRedirect}
            className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={20} />
            <span>Acessar Looker</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </motion.div>

      {/* Looker Access Card */}
      <motion.div
        variants={itemVariants}
        className="mb-8"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Acesse o Looker para Análises Avançadas</h2>
              <p className="text-primary-100 mb-4">
                Visualize dados em tempo real, crie dashboards personalizados e explore insights profundos sobre indicadores de qualidade.
              </p>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLookerRedirect}
                  className="flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Abrir Looker</span>
                  <ArrowRight size={16} />
                </motion.button>
                <span className="text-primary-200 text-sm">
                  Abre em nova aba
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <BarChart3 size={80} className="text-primary-200" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${stat.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <IconComponent className={`w-8 h-8 ${stat.color}`} />
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}
                >
                  {stat.change}
                </motion.span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 space-y-6"
        >
          {/* Sector Analysis */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Análise por Setores</h3>
              <BarChart3 className="w-6 h-6 text-primary-600" />
            </div>
            
            <div className="space-y-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                    <span className="font-medium text-gray-900">{sector.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">{sector.nonConformities}</span>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`text-sm ${
                        sector.trend === 'up' ? 'text-red-500' : 
                        sector.trend === 'down' ? 'text-green-500' : 'text-gray-500'
                      }`}
                    >
                      {sector.trend === 'up' ? '↗' : sector.trend === 'down' ? '↘' : '→'}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chart Placeholder */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Tendências Temporais</h3>
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            
            <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                <p className="text-gray-600">Gráfico de tendências será implementado aqui</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Activity Feed */}
        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Atividades Recentes</h3>
              <Activity className="w-6 h-6 text-primary-600" />
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'warning' ? 'bg-red-100 text-red-600' :
                      activity.type === 'success' ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      <IconComponent size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 mb-1">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Ações Rápidas</h3>
            
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLookerRedirect}
                className="w-full flex items-center justify-between p-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <ExternalLink size={20} />
                  <span>Acessar Looker</span>
                </div>
                <ArrowRight size={16} />
              </motion.button>
              
              {[
                'Gerar Relatório',
                'Configurar Alertas',
                'Exportar Dados',
                'Agendar Análise'
              ].map((action) => (
                <motion.button
                  key={action}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition-colors duration-300"
                >
                  {action}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
