/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
import { REST_SERVER_URL, ngRokOptions } from './Constants'

class MateriaService {

    async filterMateriaByName(name){
        const response = await axios.get(REST_SERVER_URL + '/materia/filtro/' + name,ngRokOptions)
        return response.data
    }

    async getCurrentSubjects(idEdificio){

        const response = await axios.get(REST_SERVER_URL + '/asignacion/cursando/' + idEdificio,ngRokOptions)
        return response.data
    }

    async getSubjectNames(){

        const response = await axios.get(REST_SERVER_URL + '/materia/nombre',ngRokOptions)

        return response.data
    }

    async getSubjects(){
        const response = await axios.get(REST_SERVER_URL + '/materia', ngRokOptions)

        return response.data
    }

    async getSubject(id){
        const response = await axios.get(REST_SERVER_URL + '/materia/' + id, ngRokOptions)
        return response.data
    }

    async createSubject(idUser,subject) {
        await axios.post(REST_SERVER_URL + '/materia/crear/' + idUser, subject,ngRokOptions)
    }
    
    async deleteSubject(idUser,subjectId) {
        await axios.delete(REST_SERVER_URL + `/materia/borrar/${idUser}/${subjectId}`,ngRokOptions)
    }

}

export const materiaService = new MateriaService()