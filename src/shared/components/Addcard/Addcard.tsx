import React from 'react'
import './Addcard.css'
import '.././Cards/Cards.css'
import { useState } from 'react'

type props = {
    title:string,
    addCard:(title:string,input:string) => void
}

function Addcard({title,addCard}:props) {

  const [cardDisplay,setCardDisplay] = useState<boolean>(true);
  const [Cardtext,setCardtext] = useState<string>('');

  const inputDisplay = () =>
  {
    setCardDisplay(false);
  }
  const close = () =>
  {
    setCardDisplay(true);
    setCardtext("")
  }

  const handleClick = () =>
  {
    if(Cardtext === '')
        setCardDisplay(true)

    else{
        addCard(title,Cardtext);

      
        setCardtext('');
    }
    
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
     { cardDisplay == true?<button className='add-card' onClick={inputDisplay}>Add a card</button> :
        <div >
            <input className='input-title' placeholder='Enter a title for this card...' onChange={(e)=>{setCardtext(e.target.value)}} value = {Cardtext} onKeyDown={handleKeyPress}></input>
            <button className = 'btn' onClick = {handleClick}>
                    Add card
            </button>
            <span className='cross' onClick={close}>&#10005;</span>
        </div>
    }
    </div>
  )
}

export default Addcard
