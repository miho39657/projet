import React from 'react';
import CompC from "./comp.js";
import CompR from "./compR.js";

class App extends React.Component{
  constructor(){
    super()
    this.state = {type : ""};
  }
  fct = (data) => {
    this.setState({type : data})
  }
  render(){
    const l = [
      {nom : "pomme", type: "fruit"},
      {nom : "banane", type: "fruit"},
      {nom : "kiwi", type: "fruit"},
      {nom : "orange", type: "fruit"},
      {nom : "tomate", type: "legume"},
      {nom : "carotte", type: "legume"},
      {nom : "pomme de terre", type: "legume"},
      {nom : "poivron", type: "legume"},
      {nom : "navet", type: "legume"},
    ];
    return (
      <>
      <h1>Composant App</h1>
      <CompC fct = {this.fct}/>
      <CompR elem = {l.filter(e => e.type == this.state.type)}/>
      </>
    )
  }

}

export default App;