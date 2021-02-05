import React,{useState , useEffect} from 'react'

import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services';
import Notification from './components/Notification'

import './App.css';

function App() {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filtered , setFiltered] = useState('')
  const [persons, setPersons] = useState([])
  const [message , setMessage] = useState(null)
  useEffect(() => {
    personService.getAllPerson().then(response =>setPersons(response.data))
      .catch(err => console.log(err))
  },[])

  const personsToShow = filtered.trim()? persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase()) ) : persons

  const generateId = () => persons.length? Math.max(...persons.map(person => person.id)) + 1 : 1

  const handleSubmit = () =>{
    const personExist = persons.find(item => item.name.toLowerCase()===newName.toLowerCase().trim())
    console.log(personExist)
    if(personExist) {
      const numberUpdate = window.confirm(`${newName} is already added to the phonebook,replace the old nimber with a new one`)
      if(numberUpdate){ 
        const personUpdate={...personExist, number:newNumber}
        personService.updatePerson(personExist.id,personUpdate).then(response=> {
          setPersons(persons.map(person => person.id === personExist.id? personUpdate : person ))
          setMessage(`Updated ${personUpdate.name}`)
          
          setTimeout(() =>{
            setMessage(null)
          },3000)
        }).catch(err=> console.log(err))
      }
      return null
    }
    const newPerson = {
      name : newName,
      number : newNumber,
      id : generateId()
    }

    personService.addPerson(newPerson).then(response =>{
      setPersons(persons.concat(response.data))
      setMessage(`Added ${newPerson.name}`)
      setNewName('')
      setNewNumber('')
      setTimeout(() =>{
        setMessage(null)
      },3000)

    } )
      .catch(err => console.log(err))
  }


  const handlePersonDelete =(person) => {
    const id=person.id
    if(!(window.confirm(`Delete ${person.name} ?`))) return null

    personService.deletePerson(id)
      .then(() =>{ 
        setPersons(persons.filter(person => person.id!==id)) 
        setMessage(`Removed ${person.name}`)

        setTimeout(() =>{
          setMessage(null)
        },3000)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Notification message = {message} />
       <FilterForm  filtered={filtered} setFiltered = {setFiltered} />
        <h2>Add a New</h2>
       <PersonForm newName = {newName} newNumber={newNumber} setNewNumber={setNewNumber} setNewName = {setNewName} handleSubmit={handleSubmit}  />
      <h2>Numbers</h2>
      <Persons deletePerson ={handlePersonDelete} personsToShow={personsToShow} />
    </div>
  )
}

export default App;
