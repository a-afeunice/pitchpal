import { apiClient } from "./config"



export const apiRegister= async(payload) => {
    return apiClient.post("/register",payload)
};
export const apiLogin = async(payload) => {
    return apiClient.post("/login",payload)
};
export const apiGetProfile = async() => {
    return apiClient.get("/profile")
};
