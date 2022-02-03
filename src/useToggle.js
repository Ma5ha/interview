import { useState } from "react"
export const useToggle= (initValue=false)=>{
    const [isOpen, setIsOpen] = useState(initValue);
    const toggle=()=>{
            setIsOpen(val=> !val)
    }
    return [isOpen, toggle]

}