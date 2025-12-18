import { create } from "zustand";

interface UserStore {
  name: string;
  age: number;
  count: number;
  setCount: () => void;
  setName: (newName: string) => void;
  setAge: (newAge: number) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  name: "Ajharul",
  age: 18,
  count: 0,
  setCount: () => set((state) => ({ count: state.count + 1 })),
  setName: (newName) => set({ name: newName }),
  setAge: (newAge) => set({ age: newAge }),
  resetUser: () => set({ name: "Ajharul", age: 18,count:0 }),
}));
