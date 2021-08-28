import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer'
import './MyPosts.css'
import Post from './Post/Post'



const MyPosts = (props) => {
    let postElement = props.posts.map((p) => <Post post={p.post} likeCounter={p.likeCounter} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostActionCreator(text)
        props.dispatch(action)
    }
    return (
        <div className='content__posts'>
            <div className='posts__test'>
                "My post" just a text for understand
                <div className='posts__field'>
                    <textarea onChange={onPostChange}
                        id="new post"
                        placeholder='Enter your post'
                        ref={newPostElement}
                        value={props.newPostText} />
                    <button onClick={addPost}>add</button>
                    {/* <button onClick={() => { alert('delete') }}>remove</button> */}
                </div>
                <div>
                    {postElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts