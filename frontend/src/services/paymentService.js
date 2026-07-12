import axios from "axios";


const API = axios.create({

baseURL:"http://localhost:5000/api/payment",

withCredentials:true

});



export const createPayment = async(data)=>{

const response =
await API.post(
"/initialize",
data
);


return response.data;

};