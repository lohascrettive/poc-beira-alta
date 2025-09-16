export interface Message {
  id: string;
  content: string;
  timestamp: string;
  type: 'user' | 'ai';
  isTyping?: boolean;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  currentInput: string;
  conversationId: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
  gradient: string;
}

export interface AppState {
  theme: 'light' | 'dark';
  isLoading: boolean;
  isApiConnected: boolean;
}

export interface AIResponse {
  message: string;
  suggestions?: string[];
  data?: any;
}
