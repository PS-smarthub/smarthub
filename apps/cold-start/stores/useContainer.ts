import { create } from "zustand";
import type { AuthStore, ContainerStore } from "@/types";

export const useContainer = create<ContainerStore>()((set) => ({
  containerList: [],

  setContainer: (containerList) => set(() => ({ containerList })),
}));

export const useAuthStore = create<AuthStore>()((set) => ({
  token: "",
  setToken: (token) => {
    set((state) => ({ ...state, access: token }));
  },
}));
