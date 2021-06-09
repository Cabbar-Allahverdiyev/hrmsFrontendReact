import axios from "../axios/axios";

export default class JobSeekerService{
    getJobSeeker(){
        return axios.get("/jobseekers/getall")
    }
}