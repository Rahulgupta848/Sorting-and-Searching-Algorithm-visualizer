import React, { useState ,useContext, useEffect } from 'react'
import{ArrayContext} from './context/ArrayContext'
import DisplayBars from './DisplayBars'
import ModalConfirm from './modalconfirm/ModalConfirm'
import SearchModalFoundIndex from './modalconfirm/SearchModalFoundIndex'
import SearchModalPrompt from './modalprompt/SearchModalPrompt'
import Footer from './Footer'
function BinarySearch() {
     const[toggleModal,setToggleModal]=useState(false);
     const[toggleSearchModalPrompt,setToggleSearchModalPrompt]=useState(true);
     const[startBinarySearch,setStartBinarySearch]=useState(false);
     const[binaryArray,setBinaryArray]=useState([]);
     const[foundIndex,setFoundIndex]=useState(-1);
     const[callFoundIndex,setCallFoundIndex]=useState(false);
     let {newArray,Size,val}=useContext(ArrayContext);

     useEffect(()=>{
          setBinaryArray(newArray);
     },[])

     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     async function binarysearch(){
          let arr=newArray;
          let s=Size;
          let first=0;
          let last=s-1;
          
          for(let i=0;i<s-1;i++){
               for(let j=i+1;j<s;j++){
                    if(arr[j].h < arr[i].h){
                         let temp=arr[j].h;
                         arr[j].h=arr[i].h;
                         arr[i].h=temp;
                    }
               }
          }

          setBinaryArray(arr.filter(el=>el));
          while(first<=last){
               for(let c=0;c<s;c++){
                    arr[c].swapping=false;
               }
               setBinaryArray(arr.filter(el=>el));
               arr[first].swapping=true;
               arr[last].swapping=true;
               let mid=Math.floor((first+last)/2);
               if(arr[mid].h===+val){
                    setFoundIndex(mid);
                    arr[mid].ok=true;
                    setBinaryArray(arr.filter(el=>el));
                    console.log('index',mid);
                    await wait(1000);
                    break;
               }
               if(arr[mid].h > +val){
                    last=mid-1;
               }
               else{
                    first=mid+1;
               }
               setBinaryArray(arr.filter(el=>el));
               await wait(1000);
          }
          await wait(1000);
          setCallFoundIndex(true);
     }

     if(startBinarySearch===true){
          binarysearch()
          setStartBinarySearch(false);
     }
     return (
          <>
               {
                    toggleSearchModalPrompt?<SearchModalPrompt 
                         setToggleSearchModalPrompt={(el)=>{setToggleSearchModalPrompt(el)}}
                         setToggleModal={(el)=>setToggleModal(el)}
                    ></SearchModalPrompt>:null 
               }
               {
                    toggleModal?<ModalConfirm 
                         setToggleModal={(el)=>setToggleModal(el)}
                         ToggleStartSort={(el)=>setStartBinarySearch(el)}
                    ></ModalConfirm>:null
               }
               {
                    callFoundIndex?<SearchModalFoundIndex
                         foundIndex={foundIndex}
                         setCallFoundIndex={(el)=>{setCallFoundIndex(el)}}
                    ></SearchModalFoundIndex>:null
               }
               {
                    binaryArray.map((el)=>{
                         return <DisplayBars
                              height={el.h}
                              arraySize={Size}
                              key={el.index}
                              swaped={el.swapping}
                              status={el.ok}
                              delay={true}
                         >
                         </DisplayBars>
                    })
               }
               {
               <Footer
                    algoName={'Binary Search'}
                    timeComplexity={'O(log(n))'}
               ></Footer>
          }
          </>
     )
}

export default BinarySearch