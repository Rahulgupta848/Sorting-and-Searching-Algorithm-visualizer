import 'DisplaySearchBars.css';
function DisplaySearchBars(props) {
     const myStyle={
          height:`${props.height}vh`,
          width:'20px',
          margin:'3px',
     }
     return(
          <div className={props.status?'searchbar searchcolor1':props.swaped?'searchbar searchcolor2':'searchbar searchcolor3'   
          } style={myStyle}>
          </div>
     )
}

export default DisplaySearchBars