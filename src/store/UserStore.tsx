import { create } from "zustand";


interface UserStore {
  name: string;
  age: number;
  he:string;
  setName: (newName: string) => void;
  setAge: (newAge: number) => void;
  resetUser: () => void;
  hello:(newH:string) => void;
}


export const useUserStore = create<UserStore>((set) => ({
  name: "Ajharul",  
  age: 18, 
  he:"islam",         
  setName: (newName) => set({ name: newName }), 
  setAge: (newAge) => set({ age: newAge}),     
  resetUser: () => set({ name: "Ajharul", age: 18 }), 
  hello:(newH)=> set({he:newH})
}));
