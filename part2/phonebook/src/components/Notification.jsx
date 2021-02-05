import React from 'react'
import './Notification.css'

function Notification({message: {messageText , messageColor}}) {
    if(messageText=== null) return null

    return (
        <div style={{color:messageColor,border:`2px solid ${messageColor}`}} className="Notification">
            { messageText }
        </div>
    )
}

export default Notification
