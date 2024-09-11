import React,{useState} from 'react'
import {addTodo} from "../Features/TodoSlice"
import {useDispatch} from "react-redux"
function InputForm() {
    const dispatch = useDispatch()
    const [input,setInput] = useState("")
    const add=()=>{
        if(input.length>0){
            dispatch(addTodo(input))
        }
        setInput("")
    }
  return (
    <>
      <div className='flex justify-center pt-28'>
          <div className='flex justify-center'>
              <div>
                <input type="text" className='bg-blue-600 rounded-lg w-[380px] p-2' value={input} onChange={(e)=>setInput(e.target.value)}/>
              </div>
              <div className='flex justify-center'>
                <button className='ml-3 bg-blue-400 p-2 rounded-lg' onClick={add}>
                  add
                </button>
              </div>
          </div>
      </div>
    </>
  )
}

export default InputForm
