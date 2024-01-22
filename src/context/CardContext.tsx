import { CardsTypes } from "../shared/types/CardsTypes";
import { createContext,useContext,useState } from "react";
import { TaskContent } from "../shared/types/TaskTypes";

type modal = 
{
    cardTypes:CardsTypes[],
    setCardTypes:React.Dispatch<React.SetStateAction<CardsTypes[]>>
}

export const initialCards:CardsTypes[] =  [
    {
        index: 1,
        title:'Backlogs',
        task:['plan1','plan2']
    },
    {
        index:2,
        title:'In progress',
        task:['plan_going','plan1_going','plan2_going']
    },
    {
        index:3,
        title:'Completed',
        task:['plan-completed']
    }
]


export const CardContext = createContext<modal | null>(null);

export const useCardContext = () => useContext(CardContext);

