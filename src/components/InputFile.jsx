import React,{useState,useEffect} from 'react'
import {deleteTodo,toggleTodo,upadteTodo} from "../Features/TodoSlice"
import {useDispatch} from "react-redux"
function InputFile({todo}) {
  const dispatch = useDispatch()
  const [check,setCheck] = useState(todo.checked)
  const [mssg,setMssg]=useState(todo.text)
  const [readonly,setReadonly]=useState(true)
  const [linethrough,setLinethrough] = useState("")
  const [edit,setEdit] = useState("https://cdn.iconscout.com/icon/premium/png-512-thumb/edit-9602018-8212849.png?f=webp&w=256")
  const editSaveCahnge = (e)=>{
    if(!check){
      if(edit==="https://cdn.iconscout.com/icon/premium/png-512-thumb/edit-9602018-8212849.png?f=webp&w=256"){
        setEdit("https://cdn.iconscout.com/icon/free/png-512/free-save-icon-download-in-svg-png-gif-file-formats--windows-logo-floppy-as-storage-10-pack-interface-icons-1174906.png?f=webp&w=256")
        setReadonly(false)
      }else{
        if(mssg.length>0){
          setEdit("https://cdn.iconscout.com/icon/premium/png-512-thumb/edit-9602018-8212849.png?f=webp&w=256")
          setReadonly(true)
          dispatch(upadteTodo({
            id : todo.id,
            text : mssg
          }))
        }
      }
      
    }
  }
  const funcheck =(e)=>{
    e.preventDefault()
    setCheck(!check)
    dispatch(toggleTodo(todo.id))
  }
  const removeTodo = ()=>{
    dispatch(deleteTodo(todo.id))
  }
  useEffect(()=>{
    if(check){
      setLinethrough("line-through")
      setReadonly(true)
    }else{
      setLinethrough("")
    }
  },[check])
  return (
    <>
      <div className='grid grid-cols-12 mx-96 '>
        <div className='col-span-1 bg-yellow-200 flex justify-center'>
          <input type="checkbox" name="" id="" checked={check} onChange={funcheck}/>
        </div>
        <div className='col-span-7 bg-teal-200'>
          <input type="text" className={`p-2 bg-yellow-200 w-[448px] ${linethrough}`} value={mssg} onChange={(e)=>setMssg(e.target.value)} readOnly={readonly}/>
        </div>
        <div className='col-span-2 bg-yellow-200 flex justify-center'>
          <button><img src={`${edit}`} alt="" className='h-9 w-9' onClick={editSaveCahnge} /></button>
        </div>
        <div className='col-span-2 bg-yellow-200 flex justify-center'>
          <button onClick={removeTodo}>
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-ecology-icon-download-in-svg-png-gif-file-formats--environment-recycle-trash-delete-and-pack-nature-icons-28046.png?f=webp&w=256" alt="" className='h-7 w-7' />
          </button>
        </div>
      </div>
    </>
  )
}

export default InputFile
