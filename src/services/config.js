import axios from "axios";



const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create(
    {
        baseURL:baseUrl
    }
);

export const getDetails = () => {
    const user = {};
    user.token = localStorage.getItem("accessToken");
    user.firstName = localStorage.getItem("firstName");
    user.lastName = localStorage.getItem("lastName");
    user.userName = localStorage.getItem("userName");
}


export const clearDetails = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("username");
}