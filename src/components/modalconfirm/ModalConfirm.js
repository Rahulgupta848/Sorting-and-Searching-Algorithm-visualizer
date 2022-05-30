import React from 'react'
import './ModalConfirm.css'
function ModalConfirm(props) {
     function startsort(){
          props.setToggleModal(false);
          props.ToggleStartSort(true);
     }
     function cancelsort(){
          props.setToggleModal(false);
          props.ToggleStartSort(false);
     }
     return (
          <div className='modalconfirmpage'>
               <div className='modalconfirm'>
                    <div className='modalconfirmheading'> Start Algorithm...</div>
                    <div className='allmodalconfirmbtn'>
                         <button className='modalconfirmbtn modalconfirmstart' onClick={startsort}>Start</button>
                         <button className='modalconfirmbtn modalconfirmcancel' onClick={cancelsort}>Cancel</button>
                    </div>
               </div>
          </div>
     )
}

export default ModalConfirm