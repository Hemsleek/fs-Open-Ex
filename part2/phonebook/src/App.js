import React,{useState} from 'react'
import './App.css';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubmit = () =>{
    const personExist = persons.map(person=> person.name).some(item => item===newName)
    if(personExist) {
      window.alert(`${newName} is already added to the phonebook`)
      return null

    }
    setPersons(persons.concat({name:newName}))
  }

  return (
    <div className="App">
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          <button onClick={handleSubmit}type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    {
      persons.map((person , personIndex) => <p key={`person${personIndex}`}>{person.name}</p>)
    }
    </div>
  )
}

export default App;
