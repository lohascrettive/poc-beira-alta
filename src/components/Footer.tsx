import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Farol 360',
      items: [
        'Análise Inteligente de Dados',
        'Monitoramento de Indicadores',
        'Gestão de Não Conformidades',
        'Insights Automatizados'
      ]
    },
    {
      title: 'Suporte',
      items: [
        'Segunda a Sexta: 8h às 18h',
        'Versão: 1.0.0'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-br from-red-900 to-red-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 mb-6"
            >
              <img 
                src="/CREATTIVE - PLANO DE PRODUTOS (3).png" 
                alt="Beira Alta Industrial" 
                className="h-16 w-auto"
              />
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-red-100 leading-relaxed mb-6"
            >
              Visão de tudo em todo momento!
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-3"
            >

              <div className="flex items-center space-x-3 text-red-100">
                <Mail size={16} />
                <span className="text-sm">suporte@creattive.cc</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <motion.h3
                whileHover={{ x: 5 }}
                className="text-xl font-bold mb-6 text-white"
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + itemIndex * 0.1 
                    }}
                    whileHover={{ x: 5 }}
                    className="text-red-100 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-red-700 my-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-red-200 text-sm"
          >
            © {currentYear} Desenvolvido por Creattive.cc. Todos os direitos reservados. Disponibilizado para Beira Alta Industria
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-red-200"
          >
            <span className="text-sm"></span>
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-lg">
              <img 
                src="/CREATTIVE - PLANO DE PRODUTOS (3).png" 
                alt="Farol 360" 
                className="h-10 w-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full opacity-30"
      />
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full opacity-20"
      />
    </motion.footer>
  );
};

export default Footer;
