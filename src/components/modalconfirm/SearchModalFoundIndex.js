import React from 'react'
import './SearchModalFoundIndex.css'
function SearchModalFoundIndex(props) {

     function togglepage(){
          props.setCallFoundIndex(false);
     }

     return (
          <div className='searchmodalfoundindexpage'>
               <div className='searchmodalfoundindex'>
                    <div className='searchmodalfoundindexheading'> 
                         {
                              props.foundIndex!==-1?<p>Element Found At Index {props.foundIndex}...</p>:
                                   <p>Element Not Found...</p>
                         }
                    </div>
                    <div className='allsearchmodalfoundindexbtn'>
                         <button className='searchmodalfoundindexbtn ' onClick={togglepage}>Ok</button>
                    </div>
               </div>
          </div>
     )
}

export default SearchModalFoundIndex