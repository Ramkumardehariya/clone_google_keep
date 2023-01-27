import React, { useState } from "react";
import { CButton } from '@coreui/react';
import { BsPlusLg } from 'react-icons/bs';

const Createnote = (props) =>{
    const [note,setNote] = useState({
        title: "",
        content: ""
    });

    const [click,setClick] = useState(false);
    
    const shrink = () =>{
        setClick(true);
    }
    const shrink1 = () =>{
        setClick(false);
    }

    const noteEvent = (event) =>{
        const {value,name} = event.target;

        setNote((oldData)=>{
            return {
                ...oldData,
                [name] : value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({ title: "",
        content: ""})
    }

    return (
        <>
            <div className="main_note" onDoubleClick={shrink1}>
                <form>
                  
                    <input name="title" 
                    type="text" 
                    value={note.title}
                    autoComplete="off" 
                    placeholder="Title"
                    onClick={shrink} 
                    onChange={noteEvent}>
                    </input>
                    
                    {click ?
                    <textarea name="content" 
                    rows="" column="" 
                    autoComplete="off"
                    value={note.content}
                    onChange={noteEvent}
                    
                    placeholder="Write a Note">
                    </textarea>
                    : null}

                    <CButton className="CButton" onClick={addEvent}>
                        <BsPlusLg className="plus_sign"/>
                    </CButton>
                </form>
            </div>
        </>
    )
}

export default Createnote;