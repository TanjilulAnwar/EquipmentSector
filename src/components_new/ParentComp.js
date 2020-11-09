import React, { Component } from 'react'
import MemoComp from './MemoComp'
//import PureComp from './PureComp'
//import RegComp  from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // name: 1
            name:'tanjilul'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
               // name: this.state.name+1
               name:'tanjilul'
            })
        },2000)
    }
    

    render() {
        console.log("***************PARENT********************")
        return (
            <div>
            <MemoComp name= {this.state.name}/>
                {/* <RegComp name ={this.state.name}/>
                <PureComp name ={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
