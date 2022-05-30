import React, { useState, useContext, useEffect } from 'react'
import { ArrayContext } from './context/ArrayContext'
import DisplayBars from './DisplayBars'
import ModalConfirm from './modalconfirm/ModalConfirm'
import Footer from './Footer'
const { Heap } = require("data-structures-again");

export default function HeapSort() {

     const [toggleModal, setToggleModal] = useState(true);
     const [startHeapSort, setStartHeapSort] = useState(false);
     const [heapArray, setHeapArray] = useState([]);
     let { newArray, Size } = useContext(ArrayContext);

     useEffect(() => {
          setHeapArray(newArray);
     }, [])

     function wait(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
     }

     async function heapify(arr, n, idx) {

          let parent = idx;
          let left = idx * 2 + 1;
          let right = idx * 2 + 2;
          if (left < n && arr[left].h > arr[parent].h) {
               parent = left
          }
          if (right < n && arr[right].h > arr[parent].h) {
               parent = right
          }

          if (parent !== idx) {
               let temp = arr[idx].h;
               arr[idx].h = arr[parent].h;
               arr[parent].h = temp;
               arr[parent].swapping = true;
               setHeapArray(arr.filter(el => el));
               heapify(arr, n, parent)
          }
          setHeapArray(arr.filter(el => el));
     }


     async function heapSort() {
          console.log('inside heapsort')
          let arr = heapArray;
          console.log('arr', arr);
          let s = Size;
          //heapifying entire array for first time;
          for (let i = Math.floor(s / 2) - 1; i >= 0; i--) {
               for (let c = 0; c < s; c++) {
                    arr[c].swapping = false;
               }
               heapify(arr, s, i);
               setHeapArray(arr.filter(el => el));
               await wait(50);
          }
          for (let c = 0; c < s; c++) {
               arr[c].swapping = false;
          }
          setHeapArray(arr.filter(el => el));
          //heapify first ends here;

          for (let i = Size - 1; i > 0; i--) {
               let temp = arr[0].h;
               arr[0].h = arr[i].h;
               arr[i].h = temp;
               arr[i].ok = true;
               heapify(arr, i, 0);
               setHeapArray(arr.filter(el => el));
               await wait(50);
               for (let c = 0; c < s; c++) {
                    arr[c].swapping = false;
               }
          }
          arr[0].ok = true;
          setHeapArray(arr.filter(el => el));
     }

     if (startHeapSort === true) {
          heapSort()
          setStartHeapSort(false);
     }

     return (
          <>
               {
                    toggleModal ? <ModalConfirm
                         setToggleModal={(el) => setToggleModal(el)}
                         ToggleStartSort={(el) => setStartHeapSort(el)}>
                    </ModalConfirm> : null
               }

               {
                    heapArray.map((el) => {
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
                    algoName={'Heap Sort'}
                    timeComplexity={'O(nlog(n))'}
               ></Footer>
          }
          </>
     )
}