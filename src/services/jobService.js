import axios from "../axios/axios";

export default class JobService{
    getJob(){
        return axios.get("/jobs/getall")
    }
}