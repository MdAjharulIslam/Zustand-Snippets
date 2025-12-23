import { create } from "zustand";
//update and increment methods in Zustand are different approaches to state changes,
//  though both use the set function internally. 
interface UserStore {
  name: string;
  age: number;
  count: number;
  setCount: () => void;
  setName: (newName: string) => void;
  setAge: (newAge: number) => void;
  resetUser: () => void;
  sex: string;
  setSex:(newSex:string)=> void;
}

export const useUserStore = create<UserStore>((set) => ({
  name: "Ajharul",
  age: 18,
  count: 0,
  sex:"male",
  setCount: () => set((state) => ({ count: state.count + 1 })),
  setName: (newName) => set({ name: newName }),
  setAge: (newAge) => set({ age: newAge }),
  resetUser: () => set({ name: "Ajharul", age: 18,count:0 }),
  setSex: (newSex)=> set({sex:newSex})
}));

export const userStore = create((set)=>({
  name1:"ajharul",
  setName1:()=>(newName1:string)=> set({name1:newName1})
})) 