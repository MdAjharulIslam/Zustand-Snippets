import { useState } from 'react'
import {create} from 'zustand'
interface storeType {
    count:number;
    setCount:number;
}

export const useStore = create<storeType>(()=>{
const [count, setCount] = useState(0)
})