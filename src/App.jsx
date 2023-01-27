import React, { useState } from "react";
import Header from "./components/Header";
import Createnote from "./note/Createnote";
import Note from "./note/Note";
import Footer from "./components/Footer";

const App = () =>{
    const [Note1,setinputNote] = useState([]);

    const addNote = (note) =>{
        setinputNote((oldNote)=>{
            return [...oldNote,note]
        })
    }

    const deleteNode = (id) =>{
        setinputNote(Note1.filter((value,indx)=>{
            return indx !== id;
        }))
        
    }

    return (
        <>
           <Header/>
           <Createnote passNote = {addNote}/>
           
           {Note1.map((currValue,index)=>{
            return(<Note
                key = {index}
                id = {index}
                title = {currValue.title}
                content = {currValue.content}
                Node = {deleteNode}
            />)
           })}
           
           <Footer/>
        </>
    )
}

export default App;