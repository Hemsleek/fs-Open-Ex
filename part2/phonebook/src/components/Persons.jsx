import React from 'react'

function Persons({personsToShow}) {
    return (
        <div>
        {
             personsToShow.map((person , personIndex) => <p key={`person${personIndex}`}>{person.name} - {person.number}</p>)
        } 
        </div>
    )
}

export default Persons
