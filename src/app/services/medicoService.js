import { api_metodos } from './api'; // localhost:8080

/*
    Endpoints consumidos:
    GET /medicos/listar -> listar todos os medicos (sem paginação)
    POST /medico -> cadastrar paciente
    PUT /medico -> atualizar o paciente
    DELETE /medico/{id} -> excluir paciente
*/

export function listarMedico() {
    return api_metodos.get('/medicos/listar');
}

export function cadastrarMedico(dados) {
    return api_metodos.post('/medico', dados)
}

export function atualizarMedico(dados) {
    return api_metodos.put('/medico', dados )
}

export function excluirMedico(id) {
    return api_metodos.delete(`/medico/${id}`)
}
