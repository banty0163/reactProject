import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
 currencyType="btc",
 selectOption =[],
 amountDisabled=false,
 currencyDisabled=false

  

}) {
  return (
    <div className='p-4 space-y-4 bg-gray-50 rounded-md shadow-md max-w-md mx-auto'>
     <div className="flex flex-col space-y-1">
        <label className="font-semibold text-gray-700">
           {label}
        </label>

        <input 
          type="number" 
          placeholder='Amount'
          value={amount}
          disabled={amountDisabled}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
     </div>
     <div className="flex flex-col space-y-1">
        <label className="font-semibold text-gray-700">Currency Type</label>
        <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         value={currencyType}
         disabled={currencyDisabled}
         onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} 
        >
           {
            selectOption.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
           }
        </select>
     </div>

    </div>
  )
}export default InputBox