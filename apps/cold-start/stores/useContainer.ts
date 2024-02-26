import { create } from "zustand";
import type { ContainerStore } from "@/types";


export const useContainer = create<ContainerStore>()((set) => ({
    
  containerList: [],

  setContainer: (containerList) => set(()=> ({containerList}))
}));
