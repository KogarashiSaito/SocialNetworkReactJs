import React from "react"
import "./../Dialogs.css"

const Message = (props) => {

    return (
        <div className='dialogs'>
            <div className="message__item">{props.message}</div>
        </div>
        

    )
}

export default Message
