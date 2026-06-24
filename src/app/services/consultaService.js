import { api_metodos } from './api'; // localhost:8080

/*
    Endpoints consumidos:
    GET /consulta/listar -> listar todos os consulta (sem paginação) *construir
    POST /consulta -> cadastrar paciente 
    PUT /consulta -> atualizar o paciente *construir
    DELETE /consulta/{id} -> excluir paciente *construir
*/

// export function listarConsulta() {
//     return api_metodos.get('/consulta/listar');
// }

export function cadastrarConsulta(dados) {
    return api_metodos.post('/consulta', dados)
}

// export function atualizarConsulta(dados) {
//     return api_metodos.put('/consulta', dados )
// }

// export function excluirConsulta(id) {
//     return api_metodos.delete(`/consulta/${id}`)
// }
