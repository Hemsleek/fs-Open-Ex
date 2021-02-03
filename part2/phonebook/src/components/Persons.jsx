import React from 'react'

function Persons({personsToShow,deleteNote}) {
    return (
        <div>
        {
             personsToShow.map((person , personIndex) => <div  key={`person${personIndex}`}>
             <span>{person.name} - {person.number}</span>
             <button onClick={() => deleteNote(person.id)}>delete</button>
             </div>
             )
        } 
        </div>
    )
}

export default Persons
