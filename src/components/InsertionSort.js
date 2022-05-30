import React from 'react'
import {ArrayContext} from './context/ArrayContext'
import DisplayBars from './DisplayBars';
import ModalConfirm from './modalconfirm/ModalConfirm'
import Footer from './Footer'
import {useContext,useState,useEffect} from 'react'
function InsertionSort() {
     const[toggleModal,setToggleModal]=useState(true);
     const[startInsertionSort,setStartInsertionSort]=useState(false);
     const[insertionArray,setInsertionArray]=useState([]);
     let {newArray,Size}=useContext(ArrayContext);
     
     useEffect(()=>{
          setInsertionArray(newArray);
     },[])

     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     async function insertionSort(){
          let arr=insertionArray;
          let s=Size;
          arr[0].ok=true;
          
          for(let i=1;i<s;i++){
               
               let temp=arr[i].h;
               let j=i-1;
               arr[i].ok=true;
               while(j>=0 && arr[j].h>temp){
                    for(let c=0;c<=i;c++){
                         arr[c].swapping=false;
                         arr[c].ok=true;
                    }
                    arr[j+1].h=arr[j].h;
                    arr[j].swapping=true;
                    arr[j].ok=false;
                    j--;
                    setInsertionArray(arr.filter(el=>el));
                    await wait(20);
               }
               arr[j+1].h=temp;
               arr[j+1].ok=true;
               setInsertionArray(arr.filter(el=>el));
               await wait(20);     
          }
    
     }


     if(startInsertionSort===true){
          insertionSort()
          setStartInsertionSort(false);
     }

  return (
    <>
          {
          toggleModal?<ModalConfirm 
               setToggleModal={(el)=>setToggleModal(el)}
               ToggleStartSort={(el)=>setStartInsertionSort(el)}>
               </ModalConfirm>:null
          }

          {
               insertionArray.map((el)=>{
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
                    algoName={'Insertion Sort'}
                    timeComplexity={'O(N^2)'}
               ></Footer>
          }
    </>
  )
}

export default InsertionSort