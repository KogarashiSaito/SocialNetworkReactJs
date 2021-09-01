import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let onMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    let onMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return (
                        <Dialogs
                            updateNewMessageBody={onMessageChange}
                            sendMessage={onMessageClick}
                            dialogsPage={state} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer
