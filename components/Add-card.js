import Image from "next/image"
import { useId } from "react"

function AddCard({setAddCart}) {
  let id = useId()
  
  function handleSubmit(e){
    e.preventDefault()
    let form = new FormData(e.target)
    setAddCart({active: false, data: {title: form.get('title'), id, user: {
      name: 'Nicolas',
      avatar: '/avatar.png',
    }}})
  }

  function handleCloseClick(){
    setAddCart({active: false, data: null})
  }


  
  return (
    <form onSubmit={handleSubmit} className="flex-col flex gap-5">
      <div className="flex bg-white p-2 gap-1 rounded" >
        <input name="title" className="flex-1 outline-none bg-white" type="text" placeholder="Introduzca un título para esta tarjeta..." />
        <Image src="/edit.svg" alt="" width="24" height="24" />
      </div>
      <div className="flex gap-4 items-center">
        <button className="bg-sky-600 p-2 rounded text-white">Añada Tarjeta</button>
        <button className="h-6 cursor-pointer" onClick={handleCloseClick}>
          <Image src="/close.svg" alt="" width="24" height="24" />
        </button>
      </div>
    </form>
    
  )
}

export default AddCard
