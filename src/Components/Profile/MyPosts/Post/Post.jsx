import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <div className='post'>
            <img className='post__img' src="http://sun9-21.userapi.com/s/v1/if2/j0BDPBwOYG6NaOQwHpWIuecnXa4VMy7AkI3ACc1o3v4YCvj_85zxadxFwB4L9UWS13gxDB6BnkasJXmrNsZOksDy.jpg?size=200x0&quality=96&crop=3,0,239,239&ava=1" alt="#" />
            <p className='post__message'>
                {props.post}
            </p>
            <div>
                <span className='post__like'>
                    {props.likeCounter}
                </span>
            </div>
        </div>
    )
}

export default Post