import React, { useEffect , useContext, useState } from 'react'
import {ArrayContext} from './context/ArrayContext'
import DisplayBars from './DisplayBars';
import GenerateModalPrompt from './modalprompt/GenerateModalPrompt';
function GenerateArray() {
     const[toggleGeneratePrompt,setToggleGeneratePrompt]=useState(true);
     const[startNewArray,setStartNewArray]=useState(false);
     let {newArray,setNewArray,Size,setSize}=useContext(ArrayContext);
     useEffect(()=>{
          setSize(0);    
     },[])
     function newarray() {
          let size=Size;
          setNewArray([]);
          let dummyNewArray = [];
          let id = 0;
          for (let i = 0; i < size; i++) {
               let r = Math.ceil(Math.random() * (90 - 10) + 10);
               let dummyelement = {
                    h: r,
                    index: id,
                    swapping: false,
                    ok: false
               }
               dummyNewArray.push(dummyelement);
               id++;
          }
          setNewArray(dummyNewArray)
          console.log(dummyNewArray)
           
          
     }
    
     if(startNewArray===true){
          newarray();
          setStartNewArray(false);
     }

  return (
    <>
          {
               toggleGeneratePrompt?<GenerateModalPrompt
               setStartNewArray={(el)=>{setStartNewArray(el)}}     
               setToggleGeneratePrompt={(el)=>{setToggleGeneratePrompt(el)}}
               ></GenerateModalPrompt>:null
          }
          {
               newArray.map((el) => {
                    return <DisplayBars
                         height={el.h}
                         arraySize={Size}
                         key={el.index}
                         swaped={el.swapping}
                         status={el.ok}
                    >
                    </DisplayBars>
               })
          }
    </>
  )
}

export default GenerateArray