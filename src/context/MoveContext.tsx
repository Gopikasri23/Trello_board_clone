import { createContext } from "react";
import { moveContent } from "../shared/types/MoveTypes";

export const MoveContext= createContext<moveContent|null>(null);