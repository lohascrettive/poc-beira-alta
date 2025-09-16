# Documentação da API - Farol 360

## 🔗 Endpoints da API

### Base URL
```
https://rag-beira-alta-850267293740.us-central1.run.app
```

### 1. Enviar Pergunta para IA
**POST** `/ask`

**Request Body:**
```json
{
  "pergunta": "gere insights"
}
```

**Response:**
```json
{
  "resposta": "Com base na análise dos dados da Beira Alta Industrial, identifiquei insights importantes sobre não conformidades...",
  "insights": "Análise detalhada dos indicadores de qualidade"
}
```

### 2. Health Check
**GET** `/health`

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-01-27T10:30:00Z"
}
```

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://rag-beira-alta-850267293740.us-central1.run.app
VITE_API_KEY=your_api_key_here
```

### Headers Obrigatórios
```
Content-Type: application/json
Authorization: Bearer {API_KEY}
```

## 🚀 Funcionalidades Implementadas

### ✅ Integração com API Real
- Comunicação HTTP com backend
- Fallback para simulação se API não estiver disponível
- Tratamento de erros robusto
- Indicador de status de conexão

### ✅ Sistema de Conversação
- Persistência de conversation_id
- Histórico de mensagens
- Contexto da empresa (Beira Alta)
- Tipos de análise específicos

### ✅ Otimizações de Performance
- Carregamento único dos blocos de texto
- Estados de loading apropriados
- Transições suaves
- Cache de conversação

### ✅ Tratamento de Erros
- Fallback automático para simulação
- Mensagens de erro amigáveis
- Logs detalhados para debug
- Retry automático

## 🔄 Fluxo de Funcionamento

1. **Usuário digita mensagem** → Input capturado
2. **Mensagem adicionada ao chat** → UI atualizada
3. **Tentativa de API real** → Requisição HTTP
4. **Se API disponível** → Resposta real da IA
5. **Se API indisponível** → Fallback para simulação
6. **Resposta exibida** → UI atualizada com resposta

## 📊 Status da Conexão

- 🟢 **Verde**: API conectada e funcionando
- 🟡 **Amarelo**: Modo offline (simulação)
- 🔴 **Vermelho**: Erro de conexão

## 🛠️ Desenvolvimento

### Para testar com API real:
1. Configure `VITE_API_URL` no `.env`
2. Configure `VITE_API_KEY` se necessário
3. Inicie o backend da API
4. Reinicie o frontend

### Para testar em modo offline:
1. Deixe `VITE_API_URL` vazio ou inválido
2. O sistema automaticamente usará simulação
3. Todas as funcionalidades continuam funcionando

## 📝 Logs

O sistema registra automaticamente:
- Tentativas de conexão com API
- Erros de rede
- Fallbacks para simulação
- Status de conexão

Verifique o console do navegador para logs detalhados.
