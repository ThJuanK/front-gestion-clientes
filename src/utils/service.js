const url = 'http://localhost:8000/'
import axios from 'axios'

export const service = () => {
    
}

export const get = (param) => {
    return axios.get(`${url}${param}`)
}

export const deleteItem = (id) => {
    return axios.delete(`${url}clientes/${id}`)
}   

export const put = (id, body) => {
    return axios.put( `${url}clientes/${id}`, body )
}

export const post = (body) => {
    return axios.post( `${url}clientes/add`, body )
}


