import React from 'react'

const Hello = () => {
    // return(
    //     <div className= 'dummyClass'>   
    //         <h1>Hello Again Dipto</h1>

    //     </div>
    // )
    return React.createElement(
        'div', 
        {id:'hello',class:'dummyClass'},
         React.createElement('h1',null,'Hello dipto'))
} 

export default Hello