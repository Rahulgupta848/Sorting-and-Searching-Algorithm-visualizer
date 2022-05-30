import React, { useState ,useContext, useEffect } from 'react'
import{ArrayContext} from './context/ArrayContext'
import DisplayBars from './DisplayBars'
import ModalConfirm from './modalconfirm/ModalConfirm'

export default function MergeSort(){

     const[toggleModal,setToggleModal]=useState(true);
     const[startMergeSort,setStartMergeSort]=useState(false);
     const[mergeArray,setMergeArray]=useState([]);
     let {newArray,Size}=useContext(ArrayContext);

     useEffect(()=>{
          setMergeArray(newArray);
     },[])
     
     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     async function conqure(arr,first,mid,last){
          let len=last-first+1;
          let merge=[]
          for(let i=0;i<len;i++){
               merge.push(0);
          }
          let idx1=first;
          let idx2=mid+1;
          let x=0;

          while(idx1<=mid && idx2<=last){
               if(arr[idx1].h<=arr[idx2].h){
                    merge[x++]=arr[idx1++].h
               }
               else{
                    merge[x++]=arr[idx2++].h
               }
          }

          if(idx1>mid){
               while(idx2<=last){
                    merge[x++]=arr[idx2++].h
               }
          }
          else{
               while(idx1<=mid){
                    merge[x++]=arr[idx1++].h
               }
          }

          for(let i=0, j=first; i<merge.length;i++,j++){
               arr[j].h=merge[i]
               arr[j].ok=true;
               
          }
          setMergeArray(arr.filter(el=>el));
          await wait(1000);
          
          
     }

     async function divide(arr,first,last){
          if(first<last){
               let mid=Math.floor((first+last)/2);
               divide(arr,first,mid);
               
               divide(arr,mid+1,last);
               
               conqure(arr,first,mid,last)
               setMergeArray(arr.filter(el=>el));
               await wait(50);

          }
          
     }


     async function mergeSort(){
          let arr=mergeArray;
          let s=Size;
          let first=0;
          let last=s-1;
          divide(arr,first,last);
          setMergeArray(arr.filter(el=>el));
     }

     if(startMergeSort===true){
          mergeSort()
          setStartMergeSort(false);
     }


     return (
          <>    
                {
                toggleModal?<ModalConfirm 
                     setToggleModal={(el)=>setToggleModal(el)}
                     ToggleStartSort={(el)=>setStartMergeSort(el)}>
                     </ModalConfirm>:null
                }
      
                {
                     mergeArray.map((el)=>{
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