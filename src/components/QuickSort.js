import React, { useState ,useContext, useEffect } from 'react'
import{ArrayContext} from './context/ArrayContext'
import DisplayBars from './DisplayBars'
import ModalConfirm from './modalconfirm/ModalConfirm'
import Footer from './Footer'
export default function QuickSort(){

     const[toggleModal,setToggleModal]=useState(true);
     const[startQuickSort,setStartQuickSort]=useState(false);
     const[quickArray,setQuickArray]=useState([]);
     let {newArray,Size}=useContext(ArrayContext);

     useEffect(()=>{
          setQuickArray(newArray);
     },[])
     
     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     function partition(arr,low,high){
          let pivot=arr[low].h;
          let i=low;
          let j=high;
          while(i<j){
               while(arr[i].h<=pivot){
                    i++;
               }
               while(arr[j].h>pivot){
                    j--;
               }
               if(i<=j){
                    let temp=arr[i].h;
                    arr[i].h=arr[j].h;
                    arr[j].h=temp;
               }
          }
          let temp=arr[low].h;
          arr[low].h=arr[j].h;
          arr[j].h=temp;
          return j;
     }

     function qsort(arr,low,high){
          if(low<high){
               let pivot=partition(arr,low,high)
               qsort(arr,low,pivot-1);
               qsort(arr,pivot+1,high);
          }
     }

     async function quickSort(){
          let arr=newArray;
          let s=Size;
          qsort(arr,0,s-1);
          setQuickArray(arr);
     }

     if(startQuickSort===true){
          quickSort()
          setStartQuickSort(false);
     }


     return (
          <>    
                {
                toggleModal?<ModalConfirm 
                     setToggleModal={(el)=>setToggleModal(el)}
                     ToggleStartSort={(el)=>setStartQuickSort(el)}>
                     </ModalConfirm>:null
                }
      
                {
                     quickArray.map((el)=>{
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
                    algoName={'Quick Sort'}
                    timeComplexity={'O(nlog(n))'}
               ></Footer>
          }
          </>
        )
}