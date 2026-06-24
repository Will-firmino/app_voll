import { createContext, useState } from "react";

// Esse componente será responsável por planejar todas as requisições que o frontend(rn) poderá realizar na api(spring).
// async/await

export const API_URL = 'http://localhost:8080';

let tokenJwt = null; // o tokenJwt será de início nulo. Após, será armazedo o token que foi criado na API e recebido do RN.

const TIMEOUT_MS = 10_000; // 10 segundos de espera após a requisição

// Função responsável por pegar o tokenJwt para ser usado nas requisições subsequentes. É retornado pelo backend após o login.
export function setToken(token) {
  tokenJwt = token
}

// Função responsável por limpar o tokenJwt
export function clearToken() {
  tokenJwt = null
}

const AuthContext = createContext(null);

export function AuthProvider( { children } ) {
  const [usuario, setUsuario] = useState(null)


  // async / await
}


export async function request(method, path, body) {
  const controller = new AbortController(); // É responsável por cancelar a request se exceder o tempo limite.
  const timer = setTimeout()

}
