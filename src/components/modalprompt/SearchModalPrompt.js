import React, { useState,useContext, useEffect } from 'react'
import { ArrayContext } from '../context/ArrayContext';
import './SearchModalPrompt.css'
function SearchModalPrompt(props) {
     let {val,setVal}=useContext(ArrayContext)
     const [key,setKey]=useState('');
     let change=(e)=>{
          setKey(e.target.value);
     }
     useEffect(()=>{
          setVal(key);
     },[key])

     function startok(){
          props.setToggleSearchModalPrompt(false);
          props.setToggleModal(true);
     }
     
     return (
          <div className='searchmodalpromptpage'>
               <div className='searchmodalprompt'>
                    <div className='searchmodalpromptheading'> Enter Height of Bar To Be Searched...</div>
                    <div className='inputprompt'>
                         <input type='number' onChange={change} value={key}  className='inputsearchmodalprompt'></input>
                    </div>
                    <div className='allsearchmodalpromptbtn'>
                         <button className='searchmodalpromptbtn searchmodalpromptok' onClick={startok}>Ok</button>
                    </div>
               </div>
          </div>
     )
}

export default SearchModalPrompt