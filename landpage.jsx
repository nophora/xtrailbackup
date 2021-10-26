import React ,{Component} from 'react'
import './landpage.css'
import Logo from './xlogo.png'

class Landpage extends Component{

    state={
        hight:100,
        width:100,
        ball:false,
        balls:false
    }


    componentDidMount(){
  this.setState({
       hight:window.innerHeight,
       width:window.innerWidth,
       ball:true,
       balls:true
    })
       setInterval(()=>{

         this.setState({
            ball:!this.state.ball,
            balls:!this.state.balls
         })  
       },1000)
    }
    render(){
        return(
           <div style={{height:`${this.state.hight}px`,}} className="next-landpage">
               <div className="next-head">
               <div className="next-textt">
                   <img alt="xtrail" src={Logo} className="img-next-t"/>
                   <span className="text-of-xtrail">TRAIL</span>
               </div>
               </div>
               <div style={{height:`${this.state.hight-170}px`}} className="next-body">
                  <div className="line1"></div>
                    <div className="circle">
                    <div className="circle2">
                   </div>
                   <div className="circle1">
                       <div className="ball"></div>
                   </div>
                    </div>
                    <div className="line2"></div>
               </div>
           </div>
        )
    }
}export default Landpage
