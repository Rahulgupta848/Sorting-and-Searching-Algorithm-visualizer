import './Navbar.css'
import {ArrayContext} from './context/ArrayContext'
import GenerateArray from './GenerateArray';
import BubbleSort from './BubbleSort';
import MergeSort from './MergeSort';
import HeapSort from './HeapSort';
import QuickSort from './QuickSort';
import SelectionSort from './SelectionSort';
import InsertionSort from './InsertionSort';
import LinearSearch from './LinearSearch';
import BinarySearch from './BinarySearch';
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {  useState } from 'react'

export default function Navbar() {
     const [newArray, setNewArray] = useState([]);
     const [Size, setSize] = useState(0);
     const [val,setVal]=useState();
     let Navigate=useNavigate();
     return (
          <div>
               <div className='nav'>
                    <div className='navigation'>
                         <Link className='homeclass' to='/' ><HomeOutlinedIcon className='stylehomeicon'></HomeOutlinedIcon></Link>
                         <Link className='navitemgenerate' to='/generatearray' >Generate Array</Link>
                         <Link className='navitem' to='/bubblesort' >Bubble Sort</Link>
                         <Link className='navitem' to='/selectionsort' >Selection Sort</Link>
                         <Link className='navitem' to='/insertionsort' >Insertion Sort</Link>
                         <Link className='navitem' to='/heapsort' >Heap Sort</Link>
                         <Link className='navitem' to='/quicksort' >Quick Sort</Link>
                         <Link className='navitem' to='/linearsearch' >Linear Search</Link>
                         <Link className='navitem' to='/binarysearch' >Binary Search</Link>
                         
                    </div>
                    <div className='displayarray'>
                         <ArrayContext.Provider value={{newArray,setNewArray,Size,setSize, val,setVal}}>
                              <Routes>
                                   
                                   <Route path='/generatearray' element={<GenerateArray></GenerateArray>}></Route>
                                   <Route path='/bubblesort' element={<BubbleSort></BubbleSort>}></Route>
                                   <Route path='/selectionsort' element={<SelectionSort></SelectionSort>}></Route>
                                   {/* <Route path='/mergesort' element={<MergeSort></MergeSort>}></Route> */}
                                   <Route path='/insertionsort' element={<InsertionSort></InsertionSort>}></Route>
                                   <Route path='/heapsort' element={<HeapSort></HeapSort>}></Route>
                                   <Route path='/quicksort' element={<QuickSort></QuickSort>}></Route>
                                   <Route path='/linearsearch' element={<LinearSearch></LinearSearch>}></Route>
                                   <Route path='/binarysearch' element={<BinarySearch></BinarySearch>}></Route>
                              </Routes>
                         </ArrayContext.Provider>
                         
                    </div>
               </div>
          </div>
     )
}