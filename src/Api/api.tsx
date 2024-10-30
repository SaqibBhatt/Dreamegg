import axios from "axios"

export const getMethod=(api)=>{
    return axios.get(api)
};

export const getMethodbyId=(api,id)=>{
    return axios.get(`${api}/${id}`)
};

export const postMethod=(api,data)=>{
    return axios.post(api,data)
};

export const updateMethod=(api,id,data)=>{
    return axios.put(`${api}/${id}`,data)
};

export const deleteMethod=(api,id)=>{
    return axios.delete(`${api}/${id}`)
};