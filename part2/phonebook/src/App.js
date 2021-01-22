import React,{useState} from 'react'
import './App.css';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  return (
    <div className="App">
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          <button onClick={() => setPersons(persons.concat({name:newName}))}type="submit">add</button>
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
