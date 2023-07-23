/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
import { REST_SERVER_URL, ngRokOptions } from './Constants'

class AdminService {

    async login(userCredentials){
        const response = await axios.post(REST_SERVER_URL + '/admin/login', userCredentials,ngRokOptions)
        return response.data
    }

    async getAccounts(){
        const response = await axios.get(REST_SERVER_URL + '/admin',ngRokOptions)
        return response.data
    }

    async updateAccount(idUser, user){
        const response = await axios.patch(REST_SERVER_URL + '/admin/update/' + idUser,user,ngRokOptions)
        return response.data
    }

    async createAccount(user, userLog){
        const request = {
            usuario: user,
            userLog: userLog
        }
        const response = await axios.post(REST_SERVER_URL + '/admin/create', request,ngRokOptions)
        return response.data
    }

    async deleteAccount(idUser, idUserToDelete){
        await axios.delete(REST_SERVER_URL + '/admin/delete/' + idUser + "/" + idUserToDelete, ngRokOptions)
    }

    async deleteAll(idUser){
        await axios.delete(REST_SERVER_URL + "/asignacion/deleteAll/" + idUser,ngRokOptions)
    }

}

export const adminService = new AdminService()