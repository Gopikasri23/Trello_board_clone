export interface Modaltypes 
{
    modalVisible:boolean,
    setModalVisible:React.Dispatch<React.SetStateAction<boolean>>,
    taskValue:string,
    setTaskValue:React.Dispatch<React.SetStateAction<string>>,
    titleValue:string,
    setTitleValue:React.Dispatch<React.SetStateAction<string>>
}