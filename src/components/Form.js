import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comments:'',
              topic:'react'
         }
     }
     handleUserNameChange=(event)=>{
         this.setState({
            username:event.target.value
         })
     }
     handleCommentsChange=(event)=>{
        this.setState({
           comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
           topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
     alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
     event.preventDefault()//this line prevents form fom refresh
    }

    render() {
        const {username,comments,topic}=this.state//Destructuring
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>Username</label>
                   <input type ="text"
                    defaulValue={username} 
                    onChange={this.handleUserNameChange}/>
               </div>
               <div>
                   <label>Comments</label>
                   <textarea 
                   value={comments}
                   onChange={this.handleCommentsChange}></textarea>
               </div>
               <div>
                   <label>Topic</label>
                  <select 
                  value= {topic}
                  onChange={this.handleTopicChange}>
                  <option value='react'>React</option>
                  <option value='angular'>Angular</option>
                  <option value='vue'>Vue</option>
                  </select>
               </div>
               <div><button type= "submit">Submit</button></div>
               
           </form>
        )
    }
}

export default Form
