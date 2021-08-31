import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    // let addMessage = () => {
    //     props.dispatch(sendMessageCreator())
    // }

    let onMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    // let onMessageChange = () => {
    //     let text = newMessageElement.current.value
    //     let action = updateNewMessageBodyCreator(text)
    //     props.dispatch(action)
    // }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs 
        updateNewMessageBody={onMessageChange} 
        sendMessage={onMessageClick} 
        dialogsPage={state} />
    )
}

export default DialogsContainer
