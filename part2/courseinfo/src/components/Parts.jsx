import React from 'react'

function Parts({parts}) {
    return (
        <div>
             {
                parts.map((part,partIndex) => 
                <p key={`course-part${partIndex}`}>
                    {part.name} {part.exercises}
                </p>)
            }  
        </div>
    )
}

export default Parts
