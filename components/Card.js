import Image from "next/image"

function Card({ title, user, comments = [], id, setDragged, setModal }) {
  function handleDragStart(event){

    setDragged({
      data: {
        title,
        user,
        comments,
        id,
      },
      list: event.target.closest('[data-id]').dataset.id
    })
  }

  function handleClick(){
    setModal({active: true, title})
  }

  return (
    <div draggable onDragStart={handleDragStart} className="flex flex-col gap-4 p-2 text-gray-900 bg-white rounded">
      <div className="flex justify-between">
        <p>{title}</p>  
        <button className="flex" onClick={handleClick}>
          <Image src="/edit.svg"  alt="" width="20" height="20" />
        </button>      
      </div>
      <div className="flex justify-between">
        <span className="flex items-center gap-1">
          <Image src="/coments.svg"  alt="" width="20" height="20" />
          {comments.length !== 0 ? comments.length : ''}
        </span>    
        <span>
          <Image src={user.avatar}  alt="" width="20" height="20" />
        </span>    
      </div>
    </div>
    
  )
}

export default Card
