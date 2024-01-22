import React from 'react';
import { useState } from 'react';
import NavBar from './shared/components/Navbar/navBar';
import Cards from './shared/components/Cards/Cards';
import ModalCreate from './shared/components/ModalCreate/ModalCreate';
import { taskContext } from './context/TaskContext';
import { CardContext} from './context/CardContext';
import { ModalContext } from './context/ModalContext';
import { CardsTypes } from './shared/types/CardsTypes';
import { initialCards } from './context/CardContext';

function App() {
  const [modalVisible,setModalVisible] = useState<boolean>(false);
  const [task,setTask] = useState<string[]>([]);
  const [ cardTypes, setCardTypes ] = useState<CardsTypes[]>(initialCards);
  const [taskValue,setTaskValue] = useState<string>('');
  const [titleValue,setTitleValue] = useState<string>('');

  const handleVisible = () => {
       setModalVisible(!modalVisible);
  }

  return (
    <div className="App">
      <CardContext.Provider value = {{cardTypes,setCardTypes}}>
        <taskContext.Provider value = {{task,setTask}}>
          <ModalContext.Provider value = {{modalVisible,setModalVisible,taskValue,setTaskValue,titleValue,setTitleValue}}>
              <NavBar/>
              <Cards />
              {modalVisible && <ModalCreate modalVisible = {modalVisible} handleVisible = {handleVisible}/>}
          </ModalContext.Provider>
        </taskContext.Provider>
      </CardContext.Provider>
    </div>
  );
}

export default App;
