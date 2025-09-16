import React, { createContext, useContext, useReducer, ReactNode, useCallback } from 'react';
import { AppState, ChatState, Message } from '../types';
import { apiService, simulateAIResponse, ChatRequest } from '../services/api';

interface AppContextType {
  state: AppState;
  chatState: ChatState;
  toggleTheme: () => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  updateInput: (input: string) => void;
  setTyping: (isTyping: boolean) => void;
  clearChat: () => void;
  sendMessage: (message: string) => Promise<void>;
  isApiConnected: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppAction = 
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_API_CONNECTED'; payload: boolean };

type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'UPDATE_INPUT'; payload: string }
  | { type: 'SET_TYPING'; payload: boolean }
  | { type: 'CLEAR_CHAT' }
  | { type: 'SET_CONVERSATION_ID'; payload: string };

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_API_CONNECTED':
      return { ...state, isApiConnected: action.payload };
    default:
      return state;
  }
};

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'UPDATE_INPUT':
      return { ...state, currentInput: action.payload };
    case 'SET_TYPING':
      return { ...state, isTyping: action.payload };
    case 'CLEAR_CHAT':
      return { ...state, messages: [] };
    case 'SET_CONVERSATION_ID':
      return { ...state, conversationId: action.payload };
    default:
      return state;
  }
};

const initialAppState: AppState = {
  theme: 'light',
  isLoading: false,
  isApiConnected: false,
};

const initialChatState: ChatState = {
  messages: [
    {
      id: '1',
      content: 'Olá! Sou a IA do Farol 360 especializada em análise de não conformidades e acompanhamento de indicadores. Como posso ajudá-lo hoje?',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      type: 'ai',
    },
  ],
  isTyping: false,
  currentInput: '',
  conversationId: '',
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  const [chatState, chatDispatch] = useReducer(chatReducer, initialChatState);


  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };
    chatDispatch({ type: 'ADD_MESSAGE', payload: newMessage });
  };

  const updateInput = (input: string) => {
    chatDispatch({ type: 'UPDATE_INPUT', payload: input });
  };

  const setTyping = (isTyping: boolean) => {
    chatDispatch({ type: 'SET_TYPING', payload: isTyping });
  };

  const clearChat = () => {
    chatDispatch({ type: 'CLEAR_CHAT' });
  };

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return;

    // Adicionar mensagem do usuário
    addMessage({
      content: message.trim(),
      type: 'user',
    });

    // Limpar input
    updateInput('');
    setTyping(true);

    try {
      // Tentar usar API real primeiro
      const request: ChatRequest = {
        pergunta: message.trim()
      };

      const response = await apiService.sendMessage(request);
      
      // Extrair resposta da API (pode ser 'resposta' ou 'insights')
      const aiResponse = response.resposta || response.insights || response.message || 'Resposta não disponível';

      // Adicionar resposta da IA
      addMessage({
        content: aiResponse,
        type: 'ai',
      });

      // Marcar API como conectada
      dispatch({ type: 'SET_API_CONNECTED', payload: true });

    } catch (error) {
      console.warn('API não disponível, usando simulação:', error);
      
      // Fallback para simulação
      const response = await simulateAIResponse(message);
      
      addMessage({
        content: response.resposta || response.insights || 'Resposta não disponível',
        type: 'ai',
      });

      // Marcar API como desconectada
      dispatch({ type: 'SET_API_CONNECTED', payload: false });
    } finally {
      setTyping(false);
    }
  }, [chatState.conversationId, addMessage, updateInput, setTyping]);

  return (
    <AppContext.Provider
      value={{
        state,
        chatState,
        toggleTheme,
        addMessage,
        updateInput,
        setTyping,
        clearChat,
        sendMessage,
        isApiConnected: state.isApiConnected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
