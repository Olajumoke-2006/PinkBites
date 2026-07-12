import axios from "axios";


const API = axios.create({

    baseURL: "http://localhost:5000/api/chat",

    withCredentials: true,

});


export const sendMessage = async (message) => {


    const response = await API.post("/", {

        message,

    });


    return response.data;

};