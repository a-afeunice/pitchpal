import { apiClient, clearDetails } from "./config"



export const apiRegister= async(payload) => {
    return apiClient.post("/register",payload)
};

export const apiLogin = async(payload) => {
    return apiClient.post("/login",payload)
};

export const apiLogout = async () => {
    clearDetails();
};

export const apiGetProfile = async() => {
    return apiClient.get("/profile")
};
