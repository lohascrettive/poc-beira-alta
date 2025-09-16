// Teste da API - Execute com: node test-api.js

const API_URL = 'https://rag-beira-alta-850267293740.us-central1.run.app';

async function testAPI() {
  try {
    console.log('🔍 Testando API...');
    
    const response = await fetch(`${API_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pergunta: 'gere insights'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ API funcionando!');
    console.log('📝 Resposta:', data);
    
  } catch (error) {
    console.error('❌ Erro na API:', error.message);
  }
}

testAPI();

