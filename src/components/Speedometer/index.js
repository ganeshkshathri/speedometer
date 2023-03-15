import './style.css'
import { Component } from 'react'

class Speedometer extends Component{
    state ={speedlimit:0}
    accelerateEvent =()=>{
        let {speedlimit} = this.state
        console.log("accelarated")
        if(speedlimit<=180){
            this.setState(preState=>({speedlimit:preState.speedlimit+20}))
        }
    }
    breakEvent=()=>{
        let {speedlimit} = this.state
        console.log("breaked")
        if(speedlimit>=20){
            this.setState(prevState=>({speedlimit:prevState.speedlimit-20}))
        }
    }
    render(){
        let {speedlimit} = this.state
        return(
            <div className='speedometer-app-container'>
                <div className='speedometer-container'>
                    <h1 className='heading'>SPEEDOMETER</h1>
                    <img className='speedometer-image' src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png' alt='speedometer'></img>
                    <p className='speed-text'>Speed is <span>{speedlimit}</span>mph</p>
                    <p className='speed-limits'>Min limit is 0mph, Max limit is 200mph</p>
                    <div className='buttons-container'>
                        <button className='button accelerate-button' onClick={this.accelerateEvent}>Accelerate</button>
                        <button className='button apply-brake-button' onClick={this.breakEvent}>Apply Break</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Speedometer