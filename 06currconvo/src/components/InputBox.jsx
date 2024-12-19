import React, { useId } from 'react'
import './InputBox.css'

function InputBox(
  label,
  ammount,
  selectedcurrency,
  ammountdisable,
  Currencydisabled,
  onAmmountchanged,
  onCurrencychanged,
  currencyoptions = [],

) {

  const uniqueId = useId()

  return (

    <div className='one'>
      <div className='half'>
        <label htmlFor={uniqueId}> {label} </label>
        <input type="number" 
          id={uniqueId}
          value={ammount}
          placeholder="Ammount"
          disabled={ammountdisable}
          onChange={(e) => onAmmountchanged && onAmmountchanged(e.target.value)} />
      </div>
      <div className='half'>
        <h2>Currency Type</h2>
        <select value={selectedcurrency}
          disabled={Currencydisabled}
          onChange={(e) => onAmmountchanged && onCurrencychanged(e.target.value)}>

          {currencyoptions.map((currency) =>
            <option key={currency} value={currency}>{ }</option>)}
        </select>
      </div>
    </div>
  )
}

export default InputBox