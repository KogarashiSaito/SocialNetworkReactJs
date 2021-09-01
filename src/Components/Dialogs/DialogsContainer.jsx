// import React from "react"
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let onMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }

//                     let onMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body))
//                     }

//                     return (
//                         <Dialogs
//                             updateNewMessageBody={onMessageChange}
//                             sendMessage={onMessageClick}
//                             dialogsPage={state} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
