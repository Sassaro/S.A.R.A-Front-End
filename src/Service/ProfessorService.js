/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
import { REST_SERVER_URL, ngRokOptions } from './Constants'

class ProfessorService {

    async getProfesor(id){
        const response = await axios.get(REST_SERVER_URL + '/profesor/' + id,ngRokOptions)
        return response.data
    }

    async getProfesores(){
        const response = await axios.get(REST_SERVER_URL + '/profesor',ngRokOptions)
        return response.data
    }

    async crearProfesor(idUser,profesor){

        const response = await axios.post(REST_SERVER_URL + '/profesor/crear/' + idUser, profesor, ngRokOptions)

        return response
    }

    async borrarProfesor(idUser, id){

        const response = await axios.delete(REST_SERVER_URL + '/profesor/borrar/'+ id + "/" + idUser,ngRokOptions)
        
        return response
    }

}

export const professorService = new ProfessorService()