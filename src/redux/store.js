// import dialogsReducer from "./dialogsReducer"
// import profileReducer from "./profileReducer"
// import sidebarReducer from "./sidebarReducer"

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 0, post: 'No way?', likeCounter: 405 },
//                 { id: 1, post: 'How you doing??', likeCounter: "9999+" },
//                 { id: 2, post: 'It`s my first posts', likeCounter: 62 },
//                 { id: 3, post: 'What`s up?', likeCounter: 23 },
//                 { id: 4, post: 'Yo', likeCounter: 18 },
//             ],
//             newPostText: "textAreaField",
//         },
//         dialogsPage: {
//             dialogsData: [
//                 { id: 1, name: "Volodia", },
//                 { id: 2, name: "Viola", },
//                 { id: 3, name: "Dima", },
//                 { id: 4, name: "Joey", },
//                 { id: 5, name: "Sasha", },
//             ],
//             messagesData: [
//                 { id: 1, message: 'What`s up?', },
//                 { id: 2, message: 'Hi', },
//                 { id: 3, message: 'No way' },
//                 { id: 4, message: 'How you doing?', },
//                 { id: 5, message: 'Yo', },
//             ],
//             newMessageBody: ''

//         },
//         sidebar: {
//         }
//     },
//     _callSubscriber() {
//         console.log('state was changed');
//     },

//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)

//         this._callSubscriber(this._state)
//     },
// }




// export default store
// window.state = store