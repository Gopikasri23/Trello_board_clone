import React,{useContext} from 'react'
import './Cards.css'
import CardContent from '../CardContent/CardContent'

import { CardContext } from '../../../context/CardContext';


function Cards() {
// const cardTypes = useCardContext();
const card = useContext(CardContext);
const cardTypes = card?.cardTypes!;
const setCardTypes = card?.setCardTypes!;


// cardTypes

return (
    <div>
      <ol className='card-container card-pos'>
        {cardTypes.map(cardType =>(
            <li key = {cardType.index} className='card' >
                <CardContent title = {cardType.title}/>
            </li>
        ))}
      </ol>
      
    </div>
  )
}

export default Cards
