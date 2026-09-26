import { useState , useEffect } from 'react'
import './App.css'
import Indexbox from '../components/Indexbox'
import useCurrencyConverter from '../hook/coustomhook' 

function App() {


 const [amount, setAmount] = useState()

 const [from, setFrom] = useState("USD")
 const [to, setTo] = useState("INR")
 const [currencyOption, setCurrencyOption] = useState([])
 const [convertedcurrency, setConvertedcurrency] = useState()

 const data = useCurrencyConverter(from)
 console.log(data)


  useEffect(() => {
    if (data && data.rates) {
      setCurrencyOption([from, ...Object.keys(data.rates)])
    }
  }, [data, from])

   
  let btn = () => {
    if (from === to) {
      setConvertedcurrency(amount)
      return
    }

    if (data && data.rates) {
      const rate = data.rates[to]
      setConvertedcurrency(rate * amount)
    }
  }

 let onswap = () => {
    let temp = from
    setFrom(to)
    setTo(temp)
 }
 
  return (
    <>
     <div className='container'>
        <div className='container1'>

          <Indexbox 

            label="From" 
            placeholder="Amount"  
            amount={amount}
            onamountchange={setAmount}
            currency={from}
            oncurrencychange={setFrom}
            currencyoption={currencyOption}

          />
           <button onClick={onswap}> swap </button>
          <Indexbox 
          
            label="To" 
            placeholder="Amount"  
            amount={convertedcurrency}
            currency={to}
            oncurrencychange={setTo}
            currencyoption={currencyOption}
          />

          <div className='convertbtn' onClick={btn}>covert currency</div>
        </div>    
      </div>
    </>
  )
}

export default App
