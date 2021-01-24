import React,{useState} from 'react'
import './App.css';
import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

function App() {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filtered , setFiltered] = useState('')

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const personsToShow = filtered.trim()? persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase()) ) : persons

  const handleSubmit = () =>{
    const personExist = persons.map(person=> person.name).some(item => item.toLowerCase()===newName.toLowerCase().trim())
    if(personExist) {
      window.alert(`${newName} is already added to the phonebook`)
      return null

    }
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
