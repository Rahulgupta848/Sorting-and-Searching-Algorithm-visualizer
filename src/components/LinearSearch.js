import React, { useState ,useContext, useEffect } from 'react'
import{ArrayContext} from './context/ArrayContext'
import DisplayBars from './DisplayBars'
import ModalConfirm from './modalconfirm/ModalConfirm'
import SearchModalFoundIndex from './modalconfirm/SearchModalFoundIndex'
import SearchModalPrompt from './modalprompt/SearchModalPrompt'
import Footer from './Footer'
function LinearSearch() {
     const[toggleModal,setToggleModal]=useState(false);
     const[toggleSearchModalPrompt,setToggleSearchModalPrompt]=useState(true);
     const[startLinearSearch,setStartLinearSearch]=useState(false);
     const[linearArray,setLinearArray]=useState([]);
     const[foundIndex,setFoundIndex]=useState(-1);
     const[callFoundIndex,setCallFoundIndex]=useState(false);
     let {newArray,Size,val}=useContext(ArrayContext);

     useEffect(()=>{
          setLinearArray(newArray);
     },[])

     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     async function linearSearch(){
          console.log(val);
          let arr=newArray;
          let s=Size;
          let found= null;

       
          for(let i=0;i<s && found===null;i++){
               for(let c=0;c<s;c++){
                    arr[c].swapping=false;
               }
               setLinearArray(arr.filter(el=>el));
               arr[i].swapping=true;
               if(arr[i].h===+val){
                    arr[i].ok=true;
                    found=1;
                    setFoundIndex(arr[i].index);  
                    
               }
               setLinearArray(arr.filter(el=>el));
               await wait(200);
          }
          console.log(arr);
          for(let c=0;c<s;c++){
               arr[c].swapping=false;
          }
          setLinearArray(arr.filter(el=>el));
          setCallFoundIndex(true);
     }

     if(startLinearSearch===true){
          linearSearch()
          setStartLinearSearch(false);
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
                         ToggleStartSort={(el)=>setStartLinearSearch(el)}
                    ></ModalConfirm>:null
               }
               {
                    callFoundIndex?<SearchModalFoundIndex
                         foundIndex={foundIndex}
                         setCallFoundIndex={(el)=>{setCallFoundIndex(el)}}
                    ></SearchModalFoundIndex>:null
               }
               {
                    linearArray.map((el)=>{
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
                    algoName={'Linear Search'}
                    timeComplexity={'O(N)'}
               ></Footer>
          }
          </>
     )
}

export default LinearSearch