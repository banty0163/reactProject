import React, { useState } from 'react'
import InputBox from './Components/InputBox'
import useCrypotCurrencyInfo from './hooks/useCrypotCurrencyInfo'
function App() {
    const [amount,setAmount]=useState({})
    const [from,setFrom]=useState("btc")
    const[to,setTo]=useState("inr")
    const [convertedAmount,setConvertedAmount]=useState()
    const currencyOption = useCrypotCurrencyInfo(from)
    const options = Object.keys(currencyOption)
    const swap =()=>{
         setFrom(to)
         setTo(from)
         setAmount(convertedAmount)
         setConvertedAmount(amount)
    }
    const convert = ()=>{
           setConvertedAmount(amount*currencyOption[to])
    }


  return (
    <>
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
       
       >
    
          <h1 className='text-center text-3xl font-bold mb-6'>Crypto Currency Converter</h1>
          
           <div>
             <form 
               onSubmit={(e)=>{
                e.preventDefault()
                 convert();
               }}
               className="space-y-6"
             >
             <InputBox
              label="from"
              amount={amount}
              currencyType={from}
              selectOption={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}
            /> 
 
         <div className="flex justify-center my-4">
            <button
             onClick={swap}
             type="button"
             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >Swap</button>
         </div>

         <div>
           <InputBox
            label="to"
            amount={convertedAmount}
            currencyType={to}
            selectOption={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            amountDisabled
           />

         </div>
         <div className="flex justify-center mt-6">
            <button 
             type="submit"
             className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
                convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
         </div>

             </form>
           </div>
      </div>
    </>
  )
}

export default App