import { useState , useId } from 'react'
import './indexbox.css'

function Indexbox({
    label , 
    amount , 
    currency , 
    onamountchange , 
    oncurrencychange , 
    currencyoption =["usd"]  ,
    placeholder
  }) {

  let amountinputid = useId() 

  return (
    <>
      <div className="box1">
          <div className="box2">
            <div><label htmlFor={amountinputid}> {label}  :</label></div>
            <div>
                <input 
                  id={amountinputid}
                  type="number" 
                  placeholder={placeholder} 
                  value={amount}
                  onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
                />
            </div>
          </div>    
          <div className="box3">
             <div><label htmlFor=""> Currency type : </label></div>
              <div>
                 <select name="" id="" value={currency} onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}>
                      
                      {currencyoption.map((c)=> (
                        <option key={c} value={c}>
                             {c}
                        </option>
                      ))}
                    
                 </select>
              </div>
          </div>    
     </div>
    </>
  )
}

export default Indexbox