import React,{useState , useEffect} from 'react'

import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import './App.css';
import { addNote, getAllNote } from './services';

function App() {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filtered , setFiltered] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    getAllNote().then(response => setPersons(response.data)).catch(err => console.log(err))
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
     addNote(newNote).then(response => console.log(response))
      .catch(err => console.log(err))
    setPersons(persons.concat({name:newName,number:newNumber}))
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
       <FilterForm  filtered={filtered} setFiltered = {setFiltered} />
        <h2>Add a New</h2>
       <PersonForm newName = {newName} newNumber={newNumber} setNewNumber={setNewNumber} setNewName = {setNewName} handleSubmit={handleSubmit}  />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App;
