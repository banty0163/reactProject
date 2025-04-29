import { useState } from "react"

function App() {
   const [details,setDetails]=useState({counter:0,name:"",age:''})

   function handleAction(e, type) {
      if (type === "increment") {
         setDetails(prev => ({
            ...prev,
            counter: prev.counter + 1
         }))
      } else if (type === "name") {
         setDetails(prev => ({
            ...prev,
            name: e.target.value
         }))
      } else if (type === "age") {
         setDetails(prev => ({
            ...prev,
            age: e.target.value
         }))
      }
   }

   return (
      <>
         <label>name: </label>
         <input type="text" onChange={handleNameChange} />
         <input type="text" onChange={handleAge} />
         <h1>{details.age} year old</h1>
         <h1>{details.name} has clicked {details.counter}</h1>
         <button onClick={increaseCounter}>Click here</button> 
      </>
   )
}

export default App
