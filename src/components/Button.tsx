import { useState } from "react";

 export function Button() {
     const [counter,setCounter] = useState(0);

     function increment() {
        let cont = counter+1;
        setCounter(cont);
         console.log(counter);
     }
    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}