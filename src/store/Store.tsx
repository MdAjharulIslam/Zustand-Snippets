
import {create} from 'zustand'
interface storeType {
    count:number;
    increment:()=> void;
    decrement:()=> void;
    reset:()=> void;

}

export const useStore = create<storeType>((set)=>({
count:0,
increment:()=> set((state)=> ({count:state.count+1})),
decrement:()=> set((state)=> ({count:state.count-1})),
reset:()=>set({count:0})
}))