import { createContext ,useContext} from 'react';
import { TaskContent } from '../shared/types/TaskTypes';


export const taskContext = createContext<TaskContent | null>(null);

export const useTaskContext = () => useContext(taskContext);