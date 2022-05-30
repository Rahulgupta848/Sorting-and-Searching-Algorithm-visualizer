import React, { useState ,useContext, useEffect } from 'react'
import{ArrayContext} from './context/ArrayContext'
import DisplayBars from './DisplayBars'
import ModalConfirm from './modalconfirm/ModalConfirm'
import Footer from './Footer'
let  BubbleSort=(props)=> {
     const[toggleModal,setToggleModal]=useState(true);
     const[startBubbleSort,setStartBubbleSort]=useState(false);
     const[bubbleArray,setBubbleArray]=useState([]);
     let {newArray,Size}=useContext(ArrayContext);
     useEffect(()=>{
          setBubbleArray(newArray);
     },[])
     
     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     async function bubbleSort() {
          console.log('bubble sort called')
          let arr = newArray;
          let s = Size;
          
          for (let i = 0; i < s - 1; i++) {
               for (let j = 0; j < s - 1 - i; j++) {
                    for (let c = 0; c < s; c++) {
                         arr[c].swapping = false;
                    }
                    arr[j].swapping = true;
                    arr[j + 1].swapping = true;
                    if (arr[j].h > arr[j + 1].h) {
                         //swaping
                         let temp = arr[j].h;
                         arr[j].h = arr[j + 1].h;
                         arr[j + 1].h = temp;
                         //    
                    }
                    setBubbleArray(arr.filter((el) => el))
                    await wait(20);

               }
               arr[s - i - 1].ok = true;
               setBubbleArray(arr.filter((el) => el))
               await wait(20);
          }
          arr[0].ok = true;
          setBubbleArray(arr.filter((el) => el))

     }
     if(startBubbleSort===true){
          bubbleSort()
          setStartBubbleSort(false);
     }
     
  return (
    <>    
          {
          toggleModal?<ModalConfirm 
               setToggleModal={(el)=>setToggleModal(el)}
               ToggleStartSort={(el)=>setStartBubbleSort(el)}>
               </ModalConfirm>:null
          }

          {
               bubbleArray.map((el)=>{
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
          {
               <Footer
                    algoName={'Bubble Sort'}
                    timeComplexity={'O(N^2)'}
               ></Footer>
          }
    </>
  )
}

export default BubbleSort