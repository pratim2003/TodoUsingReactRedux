import { useState } from 'react'
import './App.css'
import InputForm from "./components/InputForm"
import InputFile from "./components/InputFile"
import {useSelector } from 'react-redux'
import { TodoStore } from './app/Store'
function App() {
  const todos = useSelector(state => state.todos)
  return (
    <>
      <div className='h-screen w-full bg-black'>
        <InputForm/>
        {todos.map((todo)=>(
          <div className='pt-2' key={todo.id}>
            <InputFile todo={todo} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
