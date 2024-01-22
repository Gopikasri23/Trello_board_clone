import './ModalCreate.css'
import { ModalContext } from '../../../context/ModalContext'
import { useContext, useState } from 'react';
import Movecard from '../Movecard/Movecard';
import { MoveContext } from '../../../context/MoveContext';

type props = {
  modalVisible:boolean,
  handleVisible:()=>void
}

function ModalCreate({modalVisible, handleVisible}:props) {

  const useModalContext = useContext(ModalContext);
  const taskValue = useModalContext?.taskValue!;
  const setTaskValue = useModalContext?.setTaskValue!;
  const titleValue = useModalContext?.titleValue!;
  const [drop,setDrop] = useState<boolean>(false);
  const setModalVisible = useModalContext?.setModalVisible!;
 
 
  return (
    <div className ='window-overlay'>
      <div className='window'>
        <div className='modal_title'>
          <input className = 'title_input' value = {taskValue} onChange={(e)=>{setTaskValue(e.target.value)}}></input>
          <span className='close' onClick={handleVisible}>&#10005;</span>
        </div>
        <div className='modal_title'>
          Description
        </div>
        <input className='modal_input' placeholder='Description'>
        </input>
        <div className='move' onClick={()=>setDrop(!drop)}>
          Move 
        </div>
        <div>
          <MoveContext.Provider value={{drop,setDrop}}>
              {drop && <Movecard />}
          </MoveContext.Provider>
        </div>
      </div>
        
    </div>
  )

}

export default ModalCreate
