import Axios from 'axios'

const baseUrl = 'http://localhost:3001/persons/'

const addPerson = (data) => Axios.post(baseUrl , data)

const getAllPerson = () => Axios(baseUrl)

const deletePerson = (id) => Axios.delete(baseUrl + id)
const updatePerson = (id , data) => Axios.put(baseUrl + id,data)

const personServices = {
    addPerson:addPerson ,
    getAllPerson:getAllPerson,
    deletePerson:deletePerson,
    updatePerson: updatePerson
}

export default personServices