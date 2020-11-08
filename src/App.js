import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ParentComp from './components_new/ParentComp';
//import PureComp from './components_new/PureComp';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
//import NameList from './components/NameList'
//import StyleSheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
//import Form from './components/Form'
//import LifecycleA from './components/LifecycleA'
//import FragmentDemo from './components_new/FragmentDemo'
//import Table from './components_new/Table';


class App extends Component{

  render(){

    return (
      <div className="App">
      <ParentComp/>
        {/* <FragmentDemo/> */}
        {/* <Table/> */}
      {/* <LifecycleA/> */}
      {/* <Form/>  */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <StyleSheet primary= {true}/> */}
      {/* <Inline/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
       {/* <Greet name="Clark" heroName="Superman"></Greet> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Bruce" heroName="Batman">
        <p>This is the children</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/> */}
  
     {/* <Welcome name="Bruce" heroName="Batman"/>
     <Welcome  name="Clark" heroName="Superman"/>
     <Welcome name="Diana" heroName="Wonder Woman"/> */}
     {/* <Hello/> */}
      </div>
    );
  }
  
}

export default App;
