import React, { useState } from "react"
import Password from "./components/Password"
function App() { 
  const [color,setColor]= useState("white")
  let randomColor = ()=>{
    let letter="0123456789ABCDEF"
    let colors = '#'
    // let colors = '#'+Math.floor(Math.random()*16777215).toString(16);
    for(let i = 0;i<6;i++){
        colors+=letter[Math.floor(Math.random()*16)];
    }
    console.log("color->",color)
    setColor(colors)
 
 
  }
  return (
     <div className="w-full h-screen duration-300 font-semibold text-shadow-current  "
     style={{backgroundColor:color,
         textAlign:"center",
         
     }}> 
     <h1 className="text-4xl">Background color Changer</h1>
     <h1 className="text-4xl bg-amber-200 border-2 m-1">{color}</h1>
     
        
      <div className="w-full h-screen gap-2"
      style={{
        display:"flex", justifyContent:"center", alignItems:"center"
      }}> 
            <button className="m-2 p-2 bg-blue-500  rounded-2xl font-bold text-shadow"
               onClick={randomColor}> Random Color</button>
            <button className="m-2 p-2 bg-red-500 rounded-2xl font-bold text-shadow"
              onClick={()=>setColor('red')}> Red</button>

            <button className="m-2 p-2 bg-green-500 rounded-2xl font-bold text-shadow"
              onClick={()=>setColor('green')}> Green</button>

            <button className="m-2 p-2 bg-blue-500  rounded-2xl font-bold text-shadow"
              onClick={()=>setColor('blue')}> Blue</button>
              
              
      </div>
         <Password/>
     </div>
  
  

  )
}

export default App
