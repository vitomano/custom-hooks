import { useState } from "react"

const useCounter = (initialState = 0) => {
    
    const [counter, setCounter] = useState(initialState)

    const sumar = () =>{
        setCounter(counter + 1)
    }
    const restar = () =>{
        if(counter>=initialState){
            setCounter(counter - 1)
        }
    }

    const reset = () =>{
        setCounter(initialState)
    }

    return{
        counter,
        sumar,
        restar,
        reset
    }
}

export default useCounter
