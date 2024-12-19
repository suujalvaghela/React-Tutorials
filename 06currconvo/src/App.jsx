import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyinfo from "./hooks/useCurrencyinfo"

function App() {

  const[ammount , setAmmount] = useState(0)
  const[from , setFrom] = useState("usd")
  const[to , setTo] = useState("inr")
  const[convertedAmmount , setConvertedAmmount] = useState("0")

  let diffCurr = useCurrencyinfo(from)

  const options = Object.keys(diffCurr)


  convert = () => {
      setConvertedAmmount(ammount * diffCurr[to])
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => {e.preventDefault(); convert()}}>
          <div>
           <InputBox
              label = "from"
              ammount = {ammount}
              selectedcurrency = {from}
              onAmmountchanged = {(ammount) => setAmmount(ammount)}
              onCurrencychanged = {(currency) => setFrom(currency)}
              currencyoptions = {options}/>
          </div>
          <div>
            <InputBox
                label = "to"
                ammount = {convertedAmmount}
                selectedcurrency = {to}
                currencyoptions = {options}
                onCurrencychanged = {(currency) => setTo(currency)}
                ammountdisable/>
          </div>

          <button type="submit">Convert from {from} to {to}</button>
        </form>
      </div>
    </div>
  )
}

export default App
