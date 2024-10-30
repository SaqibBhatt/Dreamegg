import axios from "axios"

export const getMethod=(api: string)=>{
    return axios.get(api)
};

export const getMethodbyId=(api: any,id: any)=>{
    return axios.get(`${api}/${id}`)
};

export const postMethod=(api: string,data: any)=>{
    return axios.post(api,data)
};

export const updateMethod=(api: any,id: any,data: any)=>{
    return axios.put(`${api}/${id}`,data)
};

export const deleteMethod=(api: any,id: any)=>{
    return axios.delete(`${api}/${id}`)
};