# Farol 360 - Frontend React + TypeScript

Frontend moderno para o sistema Farol 360 da Beira Alta Industrial, desenvolvido com React, TypeScript e Framer Motion.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Bundler e dev server
- **Framer Motion** - Animações e transições
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Context API** - Gerenciamento de estado

## ✨ Funcionalidades

### 🎨 Interface Moderna
- Design responsivo e moderno
- Animações fluidas com Framer Motion
- Transições suaves entre seções
- Tema personalizado com cores da marca

### 💬 Chat IA Interativo
- Interface de chat em tempo real
- Simulação de respostas da IA
- Indicador de digitação
- Histórico de mensagens
- Animações de entrada das mensagens

### 📊 Dashboard Dinâmico
- Métricas em tempo real
- Gráficos interativos
- Análise por setores
- Feed de atividades
- Ações rápidas

### 🎯 Seção de Funcionalidades
- Cards animados com hover effects
- Descrições detalhadas das capacidades da IA
- Gradientes e efeitos visuais
- Animações de entrada escalonadas

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview da build
- `npm run lint` - Linting do código

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── ChatInterface.tsx # Interface do chat
│   ├── FeaturesSection.tsx # Seção de funcionalidades
│   ├── Dashboard.tsx   # Dashboard principal
│   └── Footer.tsx      # Rodapé
├── context/            # Context API
│   └── AppContext.tsx  # Estado global da aplicação
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── App.tsx            # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎨 Design System

### Cores
- **Primary**: Vermelho (#dc2626) - Cor principal da marca
- **Secondary**: Laranja (#f97316) - Cor de destaque
- **Accent**: Rosa (#ec4899) - Cor de apoio

### Animações
- Transições suaves entre páginas
- Hover effects nos elementos interativos
- Animações de entrada escalonadas
- Efeitos de loading e feedback visual

### Responsividade
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Layout adaptativo para todos os dispositivos

## 🔧 Configuração

### Tailwind CSS
Configurado com cores personalizadas e animações customizadas.

### Framer Motion
Animações otimizadas para performance com lazy loading.

### TypeScript
Configuração strict para máxima segurança de tipos.

## 📱 Funcionalidades do Chat

- **Envio de mensagens**: Enter ou clique no botão
- **Respostas simuladas**: IA responde com delay realista
- **Indicador de digitação**: Feedback visual durante processamento
- **Histórico persistente**: Mensagens mantidas durante a sessão
- **Animações**: Entrada suave das mensagens

## 📊 Dashboard Features

- **Métricas em tempo real**: KPIs principais
- **Análise por setores**: Distribuição de não conformidades
- **Feed de atividades**: Eventos recentes
- **Ações rápidas**: Botões para operações comuns

## 🚀 Deploy

O projeto está configurado para deploy em qualquer plataforma que suporte aplicações React:

- Vercel
- Netlify
- AWS Amplify
- GitHub Pages

## 📄 Licença

Desenvolvido para Beira Alta Industrial por Creattive.cc

---

**Versão**: 1.0.0  
**Desenvolvido por**: Creattive.cc  
**Cliente**: Beira Alta Industrial

