import { useState } from 'react'
import { useCallback ,useEffect,useRef} from 'react';

function App() {
    const [length,setLength]=useState(8);
    const [numberAllowed,setNumberAllowed]=useState(false);
    const [charAllowed,setCharAllowed]= useState(false);
    const [password,setPassword]=useState("");
// useRef  hook 
    let passwordRef = useRef(null)

    const copyToClipBoard = useCallback(()=>{
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,99)
      window.navigator.clipboard.writeText(password) 

    },[password])

    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let number = "0123456789"
        let specialChar = "!@#$^&*(){}[]?"
        if(numberAllowed) {
          str +=number
        }
        if(charAllowed){
             str +=specialChar
        }
        for (let i = 1; i <=length; i++) {
               let char = Math.floor(Math.random()*str.length+1)
               pass+=str.charAt(char)
          
        }
        setPassword(pass)
        console.log(pass)
        
      },[length,numberAllowed,charAllowed,setPassword ])
      
      useEffect(()=>{
        passwordGenerator()
      },[length,numberAllowed,charAllowed,setPassword])
      return (
        
   <>
      <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 bg-gray-800 text-orange-50">
          <h1 className="text-4xl text-center text-white mb-6">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
             <input 
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
              className="outline-none w-full py-2 px-4 bg-gray-700 text-white text-xl"
             />
             <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors duration-200"
              onClick={copyToClipBoard}
             
             >
               Copy
             </button>
          </div>

          <div className="flex flex-col gap-4">
               <div className="flex items-center gap-2">
                 <input 
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer w-full"
                  onChange={(e)=>{setLength(e.target.value)}}
                 />
                 <label className="text-white">Length: {length}</label>
               </div>

               <div className="flex items-center gap-2">
                <input 
                 type="checkbox"
                 defaultChecked={numberAllowed}
                 id="numberInput"
                 className="w-4 h-4"
                 onChange={()=>{
                    setNumberAllowed((prev)=> !prev)
                 }}
                />
                <label className="text-white">Include Numbers</label>
               </div>

               <div className="flex items-center gap-2">
                  <input 
                   type="checkbox"
                   defaultChecked={charAllowed}
                   id="charInput"
                   className="w-4 h-4"
                   onChange={()=>{
                    setCharAllowed((prev)=>!prev)
                   }}
                  />
                  <label className="text-white">Include Special Characters</label>
               </div>
          </div>
      </div>
          
      <footer className='text-center text-white font-bold font-serif'> @banty0163</footer>      
      
       
   </>
  )
}

export default App
