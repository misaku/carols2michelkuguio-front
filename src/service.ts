import axios from "axios";
import {toast} from "react-toastify";

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.3YFWqwzrRkYSfdPC6pVzMebSLGiONvvd-Mg0SRs_Bwo'
    }
});
api.interceptors.response.use(undefined, (error) => {
   console.log({error})
    toast(
        error?.response?.data?.message || error.message,
        {
            type: "error"
        });
    return Promise.reject(error);
})