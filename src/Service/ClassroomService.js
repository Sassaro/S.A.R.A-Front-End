/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from "axios"
import { REST_SERVER_URL, ngRokOptions } from './Constants'
import { AulaInfoRequest } from "../Domain/AulaInfoRequest"
import { convertTimeFormat } from "../Domain/Utils"


class ClassroomService{

    async getClassroomInfo(idAula){

        const response = await axios.get(REST_SERVER_URL + "/aula/info/" + idAula,ngRokOptions )

        return response.data
    }

    async getAllClassroom(){

        const response = await axios.get(REST_SERVER_URL + "/aula",ngRokOptions)

        return response.data
    }

    async getAllBuildingClassroom(id,piso){

        const response = await axios.get(REST_SERVER_URL + "/aula/edificio/" + id + "/" + piso,ngRokOptions)

        return response.data
    }

    async getAulabyid(idAula){
        const response = await axios.get(REST_SERVER_URL + "/aula/"+ idAula,ngRokOptions)

        return response.data
    }

    async getClassroomAsignaciones(id){

        const response = await axios.get(REST_SERVER_URL + '/asignacion/aula/' + id,ngRokOptions)
        
        return response.data
    }

    async deleteClassroomAsignaciones(idUser,id){
        await axios.delete(REST_SERVER_URL + '/asignacion/eliminar/' + id + "/" + idUser,ngRokOptions)
    }

    async saveAsignaciones(idUser,asignaciones){
        await axios.patch(REST_SERVER_URL + '/asignacion/actualizar/' + idUser, asignaciones,ngRokOptions)
    }

    async changeClassroomStatus(idUser,id,status){

        await axios.patch(REST_SERVER_URL + '/aula/cambiarEstado/' + id + "/" + status + "/" + idUser,ngRokOptions)   
    }

    async createAsignacion(idUser,asignacion){

        await axios.post(REST_SERVER_URL + '/asignacion/crear/' + idUser,asignacion,ngRokOptions)
        
    }

    async updateClassroom(idUser,editClassroomDTO){
        await axios.patch(REST_SERVER_URL + "/aula/update/" + idUser,editClassroomDTO,ngRokOptions)
    }
}

export const classroomService = new ClassroomService()