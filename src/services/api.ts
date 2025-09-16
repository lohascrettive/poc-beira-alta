// Configuração da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://rag-beira-alta-850267293740.us-central1.run.app';
const API_KEY = import.meta.env.VITE_API_KEY || '';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatRequest {
  pergunta: string;
}

export interface ChatResponse {
  resposta?: string;
  insights?: string;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  code: string;
  details?: any;
}

class ApiService {
  private baseURL: string;
  private apiKey: string;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.apiKey = API_KEY;
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` }),
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
          errorData.message || `HTTP ${response.status}: ${response.statusText}`,
          errorData.code || 'HTTP_ERROR',
          errorData
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      // Erro de rede ou parsing
      throw new ApiError(
        'Erro de conexão com a API. Verifique sua internet e tente novamente.',
        'NETWORK_ERROR',
        { originalError: error }
      );
    }
  }

  async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    return this.makeRequest<ChatResponse>('/ask', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.makeRequest<{ status: string; timestamp: string }>('/health');
  }
}

// Instância singleton
export const apiService = new ApiService();

// Hook para usar a API no React
export const useApi = () => {
  return {
    sendMessage: apiService.sendMessage.bind(apiService),
    healthCheck: apiService.healthCheck.bind(apiService),
  };
};

// Função para simular resposta da IA (fallback)
export const simulateAIResponse = (userMessage: string): Promise<ChatResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        "Entendo sua pergunta sobre não conformidades. Vou analisar os dados do setor para fornecer insights específicos sobre os indicadores de qualidade.",
        "Com base nos indicadores de qualidade atuais, posso identificar tendências e sugerir ações corretivas personalizadas para sua operação.",
        "Vou processar essa informação e gerar um relatório detalhado com recomendações para melhoria contínua dos processos industriais.",
        "Analisando os KPIs em tempo real, posso detectar desvios e alertar sobre possíveis não conformidades que requerem atenção imediata.",
        "Com base nos dados históricos da Beira Alta Industrial, posso projetar tendências futuras e sugerir intervenções preventivas eficazes.",
        "Identifiquei padrões interessantes em seus dados de qualidade. Vou preparar uma análise detalhada com recomendações específicas para otimização.",
        "Sua consulta está sendo processada pelo sistema Farol 360. Em breve teremos insights valiosos sobre os indicadores de conformidade.",
        "Com base na análise de dados industriais, posso fornecer insights sobre não conformidades e sugerir melhorias nos processos de qualidade.",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      resolve({
        resposta: randomResponse,
        insights: "Análise baseada em dados históricos da Beira Alta Industrial"
      });
    }, 1000 + Math.random() * 2000); // Delay entre 1-3 segundos
  });
};
