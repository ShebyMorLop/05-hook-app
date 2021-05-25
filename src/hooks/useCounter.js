import { useState } from 'react'

export const useCounter = (initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState)

    //Se puede utilizar el factor
    //const increment = (factor = 1) => {
    //    setstate(state + factor)
    //}

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initialState);
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }

}
