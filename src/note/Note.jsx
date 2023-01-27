import React from "react";
import { CButton } from '@coreui/react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Note = (props) =>{
    
    const deletEvent= (id) =>{
        props.Node(props.id)
    }
    
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <CButton color="primary"
                 className="btn" onClick={deletEvent}><RiDeleteBin6Line className="deleteIcon"/></CButton>
            </div>
        </>
    )
}

export default Note;