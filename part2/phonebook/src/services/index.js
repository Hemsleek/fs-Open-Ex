import Axios from 'axios'

const baseUrl = 'http://localhost:3001/persons/'

const addNote = (data) => Axios.post(baseUrl , data)

const getAllNote = () => Axios(baseUrl)

const deleteNote = (id) => Axios.delete(baseUrl + id)

const noteServices = {
    addNote:addNote ,
    getAllNote:getAllNote,
    deleteNote:deleteNote
}

export default noteServices