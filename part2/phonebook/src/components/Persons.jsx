import React from 'react'

function Persons({personsToShow,deletePerson}) {
    return (
        <div>
            {
                personsToShow.map((person , personIndex) => <div  style={{margin:"1rem 0"}} key={`person${personIndex}`}>
                <span>{person.name} - {person.number}</span>
                <button style={{marginLeft:'10px',cursor:'pointer'}}onClick={() => deletePerson(person)}>delete</button>
                </div>
                )
            } 
        </div>
    )
}

export default Persons
