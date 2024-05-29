import { User } from "@/types";
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user: User) => set({ user: user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
