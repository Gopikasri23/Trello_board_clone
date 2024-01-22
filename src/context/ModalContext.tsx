import { createContext,useContext } from "react";
import { Modaltypes } from "../shared/types/ModalTypes";

export const ModalContext = createContext<Modaltypes |null>(null)

