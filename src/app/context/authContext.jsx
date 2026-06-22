// Esse arquivo será responsável por planejar todas as requisições que o frontend(rn) poderá realizar na api(spring).
// async/await

export const API_URL = 'http://localhost:8080';
let tokenJwt = null;
const TIMEOUT_MS = 10_000; // 10 segundos de espera após a requisição

export async function request(method, path, body) {
  const controller = new AbortController(); // É responsável por cancelar a request se exceder o tempo limite.
  const timer = setTimeout()


  const api = {
    get: (path) => request('GET', path),
    post: (path, body) => request('POST', path, body),
    put: (path, body) => request('PUT', path, body),
    delete: (path) => request('DELETE', path),
  }
}
