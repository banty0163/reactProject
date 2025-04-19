
import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrenyInfo from './hooks/useCurrencyInfo'


function App() {
      const [amount,setAmount]=useState(0)
      const [from,setFrom]=useState("usd")
      const[to,setTo]=useState("inr")
      const [convertedAmount,setConvertedAmount]=useState(0)
      const currencyInfo = useCurrenyInfo(from)
      const options = Object.keys(currencyInfo)
       
      const swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
      }
      const convert = ()=>{
        setConvertedAmount(amount*currencyInfo[to])
      }
  return (
    <>
       <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
         style={{
           backgroundImage:`url('https://images.unsplash.com/photo-1521897258701-21e2a01f5e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vbmV5fGVufDB8fDB8fHww')`
          }}
       >
        <div className='w-full'>
          <h1 className='w-full text-center text-5xl  p-5 text-black font-bold font-sans'>Currency Converter</h1>
          <div  className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form 
              onSubmit={(e)=>{
                  e.preventDefault();
                  convert()
              }}
            
            >

            <div
             className='w-full mb-1'
            >
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                selectCurrency={from}
                onCurrencyChange={(currency)=>setFrom(currency)}
                onAmountChange={(amount)=>setAmount(amount)}
                
              />

            </div>
            <div className="relative w-full h-0.5">
                <button type='button'
                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                 onClick={swap}
                >
               Swap
                </button>
            </div>


            <div
             className='w-full mb-1'
            >
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                selectCurrency={to}
                onCurrencyChange={(currency)=>setTo(currency)}
                onAmountChange={(amount)=>setAmount(amount)}
                amountDisable

              />

            </div>

          
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
          </form>
          </div>

        </div>
         
       </div>
 </>
  )
}

export default App