import { api_metodos } from './api'; // localhost:8080

/*
    Endpoints consumidos:
    GET /pacientes/listar -> listar todos os pacientes (sem paginação)
    POST /pacientes -> cadastrar paciente
    PUT /pacientes -> atualizar o paciente
    DELETE /pacientes/{id} -> excluir pgit clone https://github.com/williamfirmino92/sistema_escolar_java.gitaciente
*/

export function listarPacientes() {
    return api_metodos.get('/pacientes/listar');
}

export function cadastrarPaciente(dados) {
    return api_metodos.post('/pacientes', dados)
}

export function atualizarPaciente(dados) {
    return api_metodos.put('/pacientes', dados )
}

export function excluirPaciente(id) {
    return api_metodos.delete(`/pacientes/${id}`)
}
