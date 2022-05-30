import React, { useState, useContext, useEffect } from 'react'
import { ArrayContext } from './context/ArrayContext'
import DisplayBars from './DisplayBars'
import ModalConfirm from './modalconfirm/ModalConfirm'
import Footer from './Footer'
export default function SelectionSort() {

     const [toggleModal, setToggleModal] = useState(true);
     const [startSelectionSort, setStartSelectionSort] = useState(false);
     const [selectionArray, setSelectionArray] = useState([]);
     let { newArray, Size } = useContext(ArrayContext);

     useEffect(() => {
          setSelectionArray(newArray);
     }, [])

     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     async function selectionSort() {
          let arr = newArray;
          let s = Size;
          for (let i = 0; i < s - 1; i++) {
               let max_el = arr[i];
               for (let j = i + 1; j < s; j++) {
                    for (let c = 0; c < s; c++) {
                         arr[c].swapping = false;
                    }
                    setSelectionArray(arr.filter(el => el));
                    arr[j].swapping = true;
                    max_el.swapping = true;
                    if (arr[j].h < max_el.h) {
                         //max_el=arr[j];
                         let temp = arr[j].h;
                         arr[j].h = max_el.h;
                         max_el.h = temp;
                         setSelectionArray(arr.filter(el => el));
                         await wait(20);
                    }
                    setSelectionArray(arr.filter(el => el));
                    //await wait(20); 
               }
               // let temp=arr[i].h;
               // arr[i].h=max_el.h;
               // max_el.h=temp;
               arr[i].ok = true;
               setSelectionArray(arr.filter(el => el));
          }
          arr[s - 1].ok = true;
          setSelectionArray(arr.filter(el => el));
     }

     if (startSelectionSort === true) {
          selectionSort()
          setStartSelectionSort(false);
     }


     return (
          <>
               {
                    toggleModal ? <ModalConfirm
                         setToggleModal={(el) => setToggleModal(el)}
                         ToggleStartSort={(el) => setStartSelectionSort(el)}>
                    </ModalConfirm> : null
               }

               {
                    selectionArray.map((el) => {
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
                         algoName={'Selection Sort'}
                         timeComplexity={'O(N^2)'}
                    ></Footer>
               }
          </>
     )
}