import React from 'react'

function Persons({personsToShow,deletePerson}) {
    return (
        <div>
        {
             personsToShow.map((person , personIndex) => <div  key={`person${personIndex}`}>
             <span>{person.name} - {person.number}</span>
             <button onClick={() => deletePerson(person)}>delete</button>
             </div>
             )
        } 
        </div>
    )
}

export default Persons
