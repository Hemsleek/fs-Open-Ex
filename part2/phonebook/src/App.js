import React,{useState} from 'react'
import './App.css';

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
      <div>
        filter shown with <input value={filtered} onChange={(e) => setFiltered(e.target.value)}/>
        </div>
        <h2>Add a New</h2>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          Phonebook: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button onClick={handleSubmit}type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    {
      personsToShow.map((person , personIndex) => <p key={`person${personIndex}`}>{person.name} - {person.number}</p>)
    }
    </div>
  )
}

export default App;
