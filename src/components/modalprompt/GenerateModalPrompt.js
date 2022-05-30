import React,{useContext,useState} from 'react'
import { ArrayContext } from '../context/ArrayContext';
import './GenerateModalPrompt.css'
function GenerateModalPrompt(props) {
     let {newArray,setNewArray,Size,setSize}=useContext(ArrayContext);
     const [key,setKey]=useState('');
     let change=(e)=>{
        setKey(e.target.value);
     }
     function ok(){
          if(+key<=100 && +key>=5){
               setSize(+key);
               props.setStartNewArray(true);
               props.setToggleGeneratePrompt(false);
               
          } 
     }
     function cancel(){
          props.setToggleGeneratePrompt(false);
     }
     return (
          <div className='generatemodalpromptpage'>
               <div className='generatemodalprompt'>
                    <div className='generatemodalpromptheading'>Enter The Size of Array... between(5-100)</div>
                    <div className='inputgenerateprompt'>
                         <input type='number' onChange={change} value={key} max={100} min={5} className='inputgeneratemodalprompt'></input>
                    </div>
                    <div className='allgeneratemodalpromptbtn'>
                         <button className='generatemodalpromptbtn generatemodalpromptok' onClick={ok}>Ok</button>
                         <button className='generatemodalpromptbtn generatemodalpromptcancel' onClick={cancel}>Cancel</button>
                    </div>
               </div>
          </div>
     )
}

export default GenerateModalPrompt