import axios from '../axios/axios'
import React from 'react'

export default  class EmployerService{
    getEmployer(){
        return axios.get("/employers/getall")
    }
}