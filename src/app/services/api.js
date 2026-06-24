import axios from "axios";

// Instância do axios
export const api = axios.create({
  baseURL: 'http://localhost:8080', // Endereco central da API
  timeout: 8000, // Tempo máximo de espera da resposta
  headers: { 'Content-Type': 'aplication/json' }, // cabecalhos que são comuns em todas as requisições rn;
})

// A interceptação da requisição - Forma de login + método 
// Login bem sucedido 
api.interceptors.request.use(config => {
  // Exibe o método e a url no console
  console.log(`[AXIOS]  ${config.method.toUpperCase()} ${config.url}`)
  // deve retornar a configuração para que a requisição prossiga
  return config; 
});

// ou Login não efetuado
api.interceptors.response.use(
  response => response, // Respota bem sucedida, apenas retorna os dados
  error => { // Resposta com erro, rejeita a promessa, e registra a mensagem
    console.warn('[AXIOS] Erro: ', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Constante responsável por montas os métodos disponíveis na API
export const api_metodos = {
  get: (path) => request('GET', path),
  post: (path, body) => request('POST', path, body),
  put: (path, body) => request('PUT', path, body),
  delete: (path) => request('DELETE', path),
}








