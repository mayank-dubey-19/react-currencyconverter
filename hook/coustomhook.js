import {useEffect, useState} from 'react'

function useCurrencyConverter(currency) {

   const[data, setData] = useState("")

   useEffect(() => {
      fetch(`https://api.frankfurter.dev/v1/latest?from=${currency}`)
      .then((res) => res.json())
      .then((data) => setData(data))
   }, [currency])
  
   return data 

}

export default useCurrencyConverter 