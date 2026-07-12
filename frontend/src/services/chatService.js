import axios from "axios";


const API = axios.create({

    baseURL: `${import.meta.env.VITE_API_URL}/api/chat`,

    withCredentials: true,

});


export const sendMessage = async (message) => {


    const response = await API.post("/", {

        message,

    });


    return response.data;

};