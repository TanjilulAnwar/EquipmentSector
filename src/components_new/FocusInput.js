import React, { Component } from 'react'
import Input from './Input'
//parent to Input
class FocusInput extends Component {
    constructor(props) {
        super(props)
    
             this.ComponentRef = React.createRef()
        
    }

   ClickHandler=()=>{
       this.ComponentRef.current.focusInput()
   }
    
    render() {
        return (
            <div>
                <Input ref={this.ComponentRef}/>
                <button onClick= {this.ClickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
