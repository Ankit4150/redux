 import { createSlice, nanoid } from '@reduxjs/toolkit'


    const  initialState={
       todos:[{id:"abc",task:"demo",isdone:false}]
    }

export const   todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
          const newtodo={
            id:nanoid(),
            task:action.payload,
            isdone:false
          }
          state.todos.push(newtodo);
        },
       
        delettodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=>todo.id!=action.payload)
        },
        ismark:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id==action.payload){
                    todo.isdone=true;
                }
            })
        }
    }

})
     export const {addtodo,delettodo,ismark}=todoSlice.actions;
export default todoSlice.reducer