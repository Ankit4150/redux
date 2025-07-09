 import { useDispatch } from "react-redux"
import { useState } from "react"
import { addtodo } from "../features/todo/todoSlice";
 function Addform(){

    let [task,settask]=useState("")
      let dispach=useDispatch();

     let taskhanlde=(event)=>{
        settask( event.target.value)
     }

    let defaulthandle=(event)=>{
        event.preventDefault();
        console.log(task)
        dispach(addtodo(task))
    }

    return(
        <div>
            <form  onSubmit={defaulthandle}>
                <input type="text" onChange={taskhanlde}>
                </input>
                <button type="submit">Add task</button>
            </form>
        </div>
    )
 }
 export {Addform}