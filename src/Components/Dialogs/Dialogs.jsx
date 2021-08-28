import React from "react"
import "./Dialogs.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messagesData.map((m) => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    // let addMessage = () => {
    //     props.dispatch(sendMessageCreator())
    // }
    let addMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    // let onMessageChange = () => {
    //     let text = newMessageElement.current.value
    //     let action = updateNewMessageBodyCreator(text)
    //     props.dispatch(action)
    // }
    let onMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                <div> <button onClick={addMessage}>Add Message</button></div>
            </div>
        </div>
    )
}

export default Dialogs
