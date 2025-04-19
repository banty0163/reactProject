import React from 'react'
import { useState,useCallback } from 'react'
const ColorChangeCar = () => {
   const [color,setColor]=useState("black");
        
    const changeColor= useCallback(()=>{
 setColor('red');
  if(color=='red'){
     setColor('white')
  }
    },[color]) 
    

  return (
    <div> 
         <h1  style={{color,fontSize:"100px"}}>I am a text</h1>
         <button onClick={changeColor}>change text color</button>
    </div>
  )

}
export default ColorChangeCar
