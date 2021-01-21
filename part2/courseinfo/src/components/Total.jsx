import React from 'react'

function Total({parts}) {
    const total = parts.reduce((acc , current) => acc+current.exercises , 0)

    return (
        <h3>total of {total} exercises</h3>
    )
}

export default Total
