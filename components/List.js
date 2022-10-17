import Image from "next/image"
import AddCard from "./Add-card"
import { useState, useEffect } from "react"

function List({ title, children, handleDrop, id, setListOfLists, listOfLists }) {
  let [ addCart, setAddCart ] = useState({
    active: false, 
    data: null
  })
  useEffect(() => {
    if(addCart.data){
      let newList = structuredClone(listOfLists)
      newList[id].push(addCart.data)
      setListOfLists(newList)
    }
    // setear las lista para agregar una nueva

  }, [addCart.data])


  function handleClick(){
    setAddCart({active: true, data: null})
  }

  function handleDragOver(e){
    e.preventDefault()
  }

  return (
    <div className="relative flex-1 " data-id={id} onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 text-gray-900 rounded bg-slate-300">
        <div>
          <h2 className="font-bold text-gray-900">{title}</h2>
        </div>
        <div className="flex flex-col gap-4 overflow-auto">
          {children}
        </div>
        {
          addCart.active ? <AddCard setAddCart={setAddCart}/> : (
          <button className="flex gap-1 items-center cursor-pointer" onClick={handleClick}>
            <Image src="/add.svg" alt="" width="24" height="24" />
            Añadir otra tarjeta
          </button>
          )
        }
        
      </div>
    </div>
    
  )
}

export default List
