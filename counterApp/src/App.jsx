
import { useState } from "react"


function App() {
     let [counter,addedValue]=useState(0)
let  addvalue = ()=>{
      addedValue(counter+1)
  }
  let removeValue=()=>{
    addedValue(counter-1)
  }
  return (
       <>
        <h1>Count:{counter}</h1>
        <button onClick={addvalue}>add value</button>
        <button onClick={removeValue}>Remove value</button>
       </>
   
  )
}

export default App
