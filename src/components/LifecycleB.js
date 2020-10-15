import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Vishwas'
         }
         console.log('LifecycleB constructor')
     }

     static getDerivedStateFromProps(props, state){
         console.log('LifecycleB getDerivedStateFromProps')
         return null
     }

     componentDidMount(){
        console.log('LifecycleB componentDidMount')
     }
     
    render() {
        console.log('render B')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
