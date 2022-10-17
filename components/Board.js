import List from "./List"
import Card from "./Card"
import { todoList, inProgressList, doneList } from "./data"
import { useState } from "react"

function Board({setModal}) {
  // console.log(setModal)
  const [dragged, setDragged] = useState(null)
  const [listOfLists, setListOfLists] = useState({
    todoList,
    inProgressList, 
    doneList,
  })

  function handleDrop(e){
    const list = e.currentTarget.dataset.id
    const listOfListsClone = structuredClone(listOfLists)
   
    const newList = listOfLists[dragged.list].filter((item) => item.id !== dragged.data.id)
    
    listOfListsClone[dragged.list] = newList
    listOfListsClone[list].push(dragged.data)
    
    setListOfLists(listOfListsClone)
  }

  return (
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div>
        <h1 className="text-2xl font-bold">
          Development
        </h1>
      </div>
      <main className="flex flex-1 gap-6">        
        <List title="TODO" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="todoList">
          {listOfLists.todoList.map((item)=> {
            return <Card {...item} key={item.id} setModal={setModal} setDragged={setDragged} />
          })}
        </List>
        <List title="In Progress" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="inProgressList">
          {listOfLists.inProgressList.map((item)=> {
              return <Card {...item} key={item.id} setModal={setModal} setDragged={setDragged}  />
            })}
        </List>
        <List title="Done" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="doneList">
          {listOfLists.doneList.map((item)=> {
              return <Card {...item} key={item.id} setModal={setModal} setDragged={setDragged}  />
            })}
        </List>
      </main>
    </div>
    
  )
}

export default Board
