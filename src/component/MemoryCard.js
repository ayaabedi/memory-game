import React from 'react'
import  './MemoryCard.css'
import logo from './logo-wrench-white.png'

class MemoryCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isFlipped : false

        };
    }

    clickHandler = () => {
        this.setState ({
            isFlipped: (!this.state.isFlipped)

        })
    }



render() {
    let innerClass = "MemoryCard_inner";
    if (this.state.isFlipped) {
        innerClass +=  "flipped"
    }

    return (
        <div className="MemoryCard" onClick={this.clickHandler}>
            <div className={innerClass}>
          <div className="MemoryCard_back"> </div>
              <div className="MemoryCard_front"> ∆ </div>
              </div>
          <img className="logo"  src={logo} alt="logo"></img>
          
        
        </div>
    )
}
}



export default MemoryCard