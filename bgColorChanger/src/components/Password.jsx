import React, { useCallback, useState } from 'react'

const Password = () => {      
    const [Length,setLength]=useState(8)
    const [charAllowed,setCharAllowed]=useState(false)
    const [numberAllowed,setNumberAllowed]= useState(false)
    const [password,setPassword]=useState("")

      const passwordGenerator = useCallback(()=>{
               
        let pass = ""
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let number = "0123456789"
        let character = "!@#^&*(){}+=-~"
        if(charAllowed){
                string+=pass
        }
        if(numberAllowed){
             number+=pass
        }

        for(let i=1;i<=Array.length;i++){
            let char = Math.floor(Math.random()*string.length+1)
            pass = string.charAt(char)
        }
      },[Length,numberAllowed,charAllowed,setPassword])
      setPassword(pass)
      console.log("password",pass)
  return (
  
       <div className='w-full  max-w-md mx-auto shadow-md rounded-2xl bg-amber-400'>
         <input type="text"
           value={pass}
           className='outline-none text-center m-1'
           placeholder='Password'
           readOnly
         />
         <button 
          className='outline-none bg-blue-400'
         
         >copy</button>
               
        </div>    
  
  )
}

export default Password
