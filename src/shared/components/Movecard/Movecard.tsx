import React from 'react'
import { useContext ,useState} from 'react'
import { MoveContext } from '../../../context/MoveContext'
import './Movecard.css'
import { CardContext } from '../../../context/CardContext'
import { ModalContext } from '../../../context/ModalContext'

type move = 
{
  prevtitle:string,
  newtitle:string,
  cards:string
}


function Movecard() {

    const useMoveContext = useContext(MoveContext)
  
    const useCardContext = useContext(CardContext);
    const cardTypes = useCardContext?.cardTypes!;
    const setCardTypes = useCardContext?.setCardTypes!;

    const useModalContext = useContext(ModalContext);
    const modalVisible = useModalContext?.modalVisible!;
    const setModalVisible = useModalContext?.setModalVisible!;
    const taskValue = useModalContext?.taskValue!;
    const titleValue = useModalContext?.titleValue!;
    const [selectedOption, setSelectedOption] = useState<string>(titleValue); 
   
    const move = ({prevtitle,newtitle,cards}:move)=>{
      //delete
        const updatedcardTypes = cardTypes.map((card,ind) => {
          if(card.title === prevtitle)
          {
              return{
                  ...card,
                  task:card.task.filter((task) => task !== cards)
              };  
            
          }
          else if(card.title === newtitle)
          {
            return{
                ...card,
                task:[...card.task,cards]
            };  
           
          }
          return card;
      })
      setCardTypes(updatedcardTypes);
    }

    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      let str = e.target.value;
      setSelectedOption(str);
      let prevtitle:string = selectedOption;
      let  newtitle:string = str;
      let  cards:string = taskValue;
      move({prevtitle,newtitle,cards});
      setModalVisible(!modalVisible)
    };

    
  return (
    <div>
      <div className='move_box'>
        <select className='move-list' name="program" id = 'program' onChange={handleSelectChange} value={selectedOption} >
          <option value='Backlogs'>Backlogs</option>
          <option value='In progress'>In progress</option>
          <option value='Completed'>Completed</option>
        </select>  
      </div>
    </div>
  )
}

export default Movecard
