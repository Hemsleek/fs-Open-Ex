import React from 'react'
import Parts from './Parts'
import Total from './Total'

function Content({parts}) {
    return (
        <div className="Content">
            <Parts parts={parts} />
        </div>
    )
}

export default Content
