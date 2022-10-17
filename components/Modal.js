import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";


function ModalContent({showModal, setModal}){

  function handleClick(){
    setModal(false)
  }

  if(showModal.active){
    return(
      <div className="absolute inset-0 flex items-center justify-center bg-slate-700/60">
        <div className="flex flex-col gap-4 p-4 bg-white rounded w-96">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-black">{showModal.title}</h2>
            <button onClick={handleClick} className="flex">
              <Image src="/close.svg" width="24" height="24" alt=""/>
            </button>
          </div>
  
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-black ">Descripción</h3>
            <input className="flex-1 p-4 text-black rounded outline-none bg-slate-200" type="text" placeholder="Añadir una descripción..."/>
          </div>
  
  
        </div>
  
      </div>
    )
  }
  return null
}

function Modal({showModal, setModal}) {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    if (isBrowser) {
        return ReactDOM.createPortal(
            <ModalContent showModal={showModal} setModal={setModal}/>, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}

export default Modal;