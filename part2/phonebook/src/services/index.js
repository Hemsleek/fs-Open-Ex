import Axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

export const addNote = (data) => Axios.post(baseUrl , data)

export const getAllNote = () => Axios(baseUrl)