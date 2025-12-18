import { create } from "zustand";


interface UserStore {
  name: string;
  age: number;
  setName: (newName: string) => void;
  setAge: (newAge: number) => void;
  resetUser: () => void;
}


export const useUserStore = create<UserStore>((set) => ({
  name: "Ajharul",  
  age: 18,          
  setName: (newName) => set({ name: newName }), 
  setAge: (newAge) => set({ age: newAge }),     
  resetUser: () => set({ name: "Ajharul", age: 18 }), 
}));
