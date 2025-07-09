import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { delettodo } from "../features/todo/todoSlice"
import { Addform } from "./Addform"
import { ismark } from "../features/todo/todoSlice"
import CheckIcon from '@mui/icons-material/Check';

 function Todo(){
     let todos=useSelector((state)=>state.todos)
     console.log(todos)
         let dispatch= useDispatch();

     let deletehandle=(id)=>{
             dispatch(delettodo(id));
     }
     
    let markhandle=(id)=>{
         dispatch(ismark(id));
    }


    return(
        <div>
            <Addform/>
            <h3>Todo list</h3>
            <ul>
              {todos.map((todo)=><li key={todo.id}> {todo.task}
                 <button onClick={()=>deletehandle(todo.id)}>delete</button>
                  {<button onClick={()=>markhandle(todo.id)} style={todo.isdone==true?{textDecorationLine:"line-through", textDecorationColor:"red"}:{}}>Done</button> }

              </li>)}
            </ul>
        </div>
    )
 }

 export {Todo}