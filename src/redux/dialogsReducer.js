const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        { id: 1, name: "Volodia", },
        { id: 2, name: "Viola", },
        { id: 3, name: "Dima", },
        { id: 4, name: "Joey", },
        { id: 5, name: "Sasha", },
    ],
    messagesData: [
        { id: 1, message: 'What`s up?', },
        { id: 2, message: 'Hi', },
        { id: 3, message: 'No way' },
        { id: 4, message: 'How you doing?', },
        { id: 5, message: 'Yo', },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({ id: 6, message: body, },)
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: text
    }
}

export default dialogsReducer