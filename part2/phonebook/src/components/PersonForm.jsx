import React from 'react'

function PersonForm({newName , newNumber , setNewNumber , setNewName , handleSubmit}) {
    return (
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
    )
}

export default PersonForm
