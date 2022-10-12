import { Component } from "react";
import Header from './components/header/Header';
import Body from './components/body/Body';

class App extends Component{
  render(){
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
  }
}

export default App;