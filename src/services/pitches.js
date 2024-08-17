import { apiClient } from "./config"

 export const apiAddpitch = async (payload) => {
    return apiClient.post("/pitches", payload)
 }

 export const apiGetpitches = async () => {
    return apiClient.get("/pitches")
 };

 export const apiGetpitchById= async (id) => {
    return apiClient.get(`/pitches/${id}`)
};

export const apiUpdatepitch = async (id) => {
    return apiClient.patch(`/pitches/${id}`)
};

export const apiDeletepitch = async (id) => {
    return apiClient.delete(`/pitches/${id}`)
};