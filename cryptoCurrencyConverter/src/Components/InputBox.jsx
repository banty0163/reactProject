import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyType,
    selectOption=[],
    selectCurrency="btc",
    amountDisable=false,
    currencyDisable=false

}) {
    
  return (
       <div className="space-y-4 p-4 border rounded-md max-w-sm">
         <label className="block text-lg font-semibold mb-1">{label}</label>

         <input 
           type="number" 
           value={amount}
           placeholder='amount'
           onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
           disabled={amountDisable}
           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
         <div>
            <p className="mb-1 font-medium">Currency Type</p>
            <select 
              value={currencyType}
              disabled={currencyDisable}
              onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {
                    selectOption.map((currency)=>( 
                        <option key={currency} value={currency} >{currency}</option>
                    ))
                }
            </select>
         </div>

       </div>
  )
}

export default InputBox