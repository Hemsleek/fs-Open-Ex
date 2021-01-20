import React from 'react'

function Content({parts}) {
    return (
        <div className="Content">
            {
                parts.map((part,partIndex) => 
                <p key={`course-part${partIndex}`}>
                    {part.name} {part.exercises}
                </p>)
            }
        </div>
    )
}

export default Content
