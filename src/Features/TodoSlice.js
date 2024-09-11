import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos : [{
        id : 1,
        text : "hello world",
        checked : false
    }]
}

export const TodoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
                checked : false
            }
            state.todos.push(todo)
        },
        deleteTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        upadteTodo : (state,action)=>{
            state.todos = state.todos.map((todo)=>(
                todo.id == action.payload.id ? {...todo,text : action.payload.text} : todo
            ))
        },
        toggleTodo : (state,action)=>{
            state.todos = state.todos.map((todo)=>(
                todo.id == action.payload ? {...todo,checked : !todo.checked} : todo
            ))
        }
    }
})

export const {addTodo,deleteTodo,toggleTodo,upadteTodo} = TodoSlice.actions

export default TodoSlice.reducer