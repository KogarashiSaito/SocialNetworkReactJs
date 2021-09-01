const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 0, post: 'No way?', likeCounter: 405 },
        { id: 1, post: 'How you doing??', likeCounter: "9999+" },
        { id: 2, post: 'It`s my first posts', likeCounter: 62 },
        { id: 3, post: 'What`s up?', likeCounter: 23 },
        { id: 4, post: 'Yo', likeCounter: 18 },
    ],
    newPostText: "textAreaField",
}


const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likeCounter: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}



export default profileReducer