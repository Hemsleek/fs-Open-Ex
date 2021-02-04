import React,{useState , useEffect} from 'react'

import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import './App.css';
import noteService from './services';

function App() {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filtered , setFiltered] = useState('')
  const [persons, setPersons] = useState([])

  const allNotes = () => {

    noteService.getAllNote().then(response =>setPersons(response.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    allNotes()
  },[])

  const personsToShow = filtered.trim()? persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase()) ) : persons

  const generateId = () => persons.length? Math.max(...persons.map(person => person.id)) + 1 : 1

  const handleSubmit = () =>{
    const personExist = persons.map(person=> person.name).some(item => item.toLowerCase()===newName.toLowerCase().trim())
    if(personExist) {
      window.alert(`${newName} is already added to the phonebook`)
      return null

    }
    const newNote = {
      name : newName,
      number : newNumber,
      id : generateId()
    }

    noteService.addNote(newNote).then(response =>{
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')

    } )
      .catch(err => console.log(err))
  }


  const handleNoteDelete =(person) => {

    if(!(window.confirm(`Delete ${person.name} ?`))) return null

    noteService.deleteNote(person.id)
      .then(response =>{ allNotes() })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
       <FilterForm  filtered={filtered} setFiltered = {setFiltered} />
        <h2>Add a New</h2>
       <PersonForm newName = {newName} newNumber={newNumber} setNewNumber={setNewNumber} setNewName = {setNewName} handleSubmit={handleSubmit}  />
      <h2>Numbers</h2>
      <Persons deleteNote ={handleNoteDelete} personsToShow={personsToShow} />
    </div>
  )
}

export default App;
