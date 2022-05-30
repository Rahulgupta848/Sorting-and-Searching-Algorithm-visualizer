import './DisplayBars.css'
export default function DisplayBars(props){
     const myStyle={
          height:`${props.height}vh`,
          width:'20px',
          margin:'3px',
          
     }

     const myStyle2={
          height:`${props.height}vh`,
          width:'20px',
          margin:'3px',
          transitionDelay: '1000ms',
          transition: '0.5s '
          
     }
     return(
          <div className={props.status?'bar color1':props.swaped?'bar color2':'bar color3'   
          } style={myStyle}>
          </div>
     )
}