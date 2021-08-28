import React from "react"
import { NavLink } from "react-router-dom";
import "./../Dialogs.css"

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <div className='item active'>
                <NavLink to={path}> {props.name} </NavLink>
            </div>
        </div>
    )
}


export default DialogItem
