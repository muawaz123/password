import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/passchar';

function App() {
let [uppercase,setUppercase] = useState(false)
let [lowercase,setLowercase] = useState(false)
let [number,setNumber] = useState(false)
let [symbols,setSymbols] = useState(false)
let [passwordlen,setPasswordlen] = useState(10)
let [fPass,setPass] =useState('')

let createPassword=()=>{
  let finalPass=''
  let charSet=''
   if(uppercase || lowercase || number || symbols){
     if(uppercase) charSet+=UC;
     if(lowercase) charSet+=LC;
     if(number) charSet+=NC;
     if(symbols) charSet+=SC
     for(let i=0;i<passwordlen;i++){
       finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
     } 
     setPass(finalPass)  
   }
    else{
      alert("please one checkbox")
    } 
}
let copyPass= ()=> {
  navigator.clipboard.writeText(fPass)
}
  return (
     <>
     <div className='passwordBox'> 
      <h2>
        Password Generator App
      </h2>
    <div className='passwordBoxIn'>
      <input type='text' value={fPass}/> <button onClick={copyPass}>copy</button>
    </div>
    <div className='passwordlength'>
      <label>Password length</label>
      <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)}/>
    </div>
    <div className='passwordlength'>
      <label>Include uppercase letter</label>
      <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
    </div>
    <div className='passwordlength'>
      <label>Include lowercase letter</label>
      <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
    </div>
    <div className='passwordlength'>
      <label>Include number</label>
      <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
    </div>
    <div className='passwordlength'>
      <label>Include symbols</label>
      <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
    </div>
    <button className='btn' onClick={createPassword}>
      Generate Password
    </button>
    

     </div>
     </>
  );
}

export default App;
