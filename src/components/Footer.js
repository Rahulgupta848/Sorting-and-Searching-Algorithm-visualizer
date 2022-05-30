import React from 'react'
import './Footer.css'
function Footer(props) {
  return (
    <>
          <div className='footer'>
               <div className='footercontext'>
                    <div className='algorithm'>Algorithm : {props.algoName}</div>
                    <div className='complexity'>Time Complexity : {props.timeComplexity}</div>
               </div>
          </div>
    </>
  )
}

export default Footer