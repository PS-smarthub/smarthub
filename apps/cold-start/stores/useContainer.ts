import { create } from 'zustand'
import type { Container, ContainerStore } from '@/types';

const containers = [
    { id: "0", name: "container_1", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "1", name: "container_2", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "2", name: "container_3", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "3", name: "container_4", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "4", name: "container_5", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "5", name: "container_6", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "6", name: "container_7", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "7", name: "container_8", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "8", name: "container_9", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "9", name: "container_10", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "10", name: "container_11", t1: 10.0, t2: 11.0, t: 12.0 },
    { id: "11", name: "container_12", t1: 10.0, t2: 11.0, t: 12.0 },
  ] as Container[]

export const useContainer = create<ContainerStore>()((set) => ({
  
    containerList: containers,

    setContainer: (container: Container) => {
        set((state)=> ({
            containerList: [...state.containerList, container],
        }));
    },
}));