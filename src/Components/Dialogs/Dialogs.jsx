import React from "react"
import "./Dialogs.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messagesData.map((m) => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    let onMessageClick = () => {
        props.sendMessage()
    }
    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className='dialogs'>
            <div className='dialogs__items'>
                {dialogsElements}
            </div>
            <div className='messages'>
                {messagesElements}
            </div>
            <div>
                <div> <textarea onChange={onMessageChange}
                    value={newMessageBody}
                    placeholder='Enter your message'
                    id="newMessage"></textarea></div>
                <div> <button onClick={onMessageClick}>Add Message</button></div>
            </div>
        </div>
    )
}


export default Dialogs
