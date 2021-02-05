import React from 'react'
import './Notification.css'

function Notification({message}) {
    if(message=== null) return null

    return (
        <div className="Notification">
            { message }
        </div>
    )
}

export default Notification
