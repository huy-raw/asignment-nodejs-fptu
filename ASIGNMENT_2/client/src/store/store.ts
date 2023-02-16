import { create } from "zustand";
import { nationStore } from "./nationStore";



let combineStores = (set: any, get: any) => ({
    ...nationStore(set, get)
})


export default create(combineStores)