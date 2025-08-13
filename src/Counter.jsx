import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

const handleAdd = () =>{
    const newCount = count + 1;
    setCount(newCount)
    }

    const handleMinus = () => {
        if(count < 1){
            console.log('please plas 1')
        }else{
            setCount(count - 1);
        }
    }

    return(
        <div style={{border: "2px solid yellow"}}>
            
            <button onClick={handleAdd}> + </button>
            <h3>Counter : {count ? count : 'Please Type Plus Number'}</h3>
            <button onClick={handleMinus}> - </button>
        </div>
    )
}