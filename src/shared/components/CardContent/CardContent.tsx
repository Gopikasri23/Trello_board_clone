import React, { useState ,useContext } from 'react'
import './CardContent.css'
import Addcard from '../Addcard/Addcard'
import {MdDeleteOutline} from 'react-icons/md'
import { useTaskContext } from '../../../context/TaskContext'
import { ModalContext } from '../../../context/ModalContext'
import { CardContext } from '../../../context/CardContext'

type props = {
    title:string,
}

function CardContent({title}: props) {
   
    const card = useContext(CardContext);
    const cardTypes = card?.cardTypes!;
    const setCardTypes = card?.setCardTypes!;
    
   const textcontext = useTaskContext();
   
   const useModalContext = useContext(ModalContext);
   const modalVisible = useModalContext?.modalVisible!;
   const setModalVisible = useModalContext?.setModalVisible!;
   const setTaskValue = useModalContext?.setTaskValue!;

   const setTitleValue = useModalContext?.setTitleValue!;
   const addCard = (title:string,input:string) => 
   {
    const updatecardTypes = cardTypes.map((card) => {
        if(card.title === title)
        {
            return{
                ...card,
                task:[...card.task,input]
            };  
           
        }
        return card;
     })
     setCardTypes(updatecardTypes!);
   }

   const deleteCard = (title:string, cards:string) =>
   {
     
     const updatecardTypes = cardTypes.map((card,ind) => {
        if(card.title === title)
        {
            return{
                ...card,
                task:card.task.filter((task) => task !== cards)
            };  
           
        }
        return card;
     })
     setCardTypes(updatecardTypes);
     
   }

   const modalCreation = (task:string)=>
   {
        setTaskValue(task)
        setModalVisible(true)
        setTitleValue(title);
   }

   const handleDeleteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,task:string) => {
         e.stopPropagation();
         deleteCard(title,task)
   }

  return (
    <div >
      <div className='title'>{title}</div>
       <ol className='list'>
        { 
        cardTypes.map(card =>(
            card.title === title  && 
            (   
                card.task.map((task,ind) => (
                    <li key = {title + ind} className = 'list-item' id = {title + ind} onClick={()=>modalCreation(task)}>
                        <div className='list-item-content'>
                            <div>{task}</div>
                        </div>
                        <div className='del-icon' onClick={(e)=>handleDeleteClick(e,task)}>
                            <MdDeleteOutline/>
                        </div>
                    </li>
                ))
            )            
            )
            
        )
        
        }

        <Addcard title = {title} addCard={addCard}/>
        
       </ol>
       
    </div>
  )
}

export default CardContent
