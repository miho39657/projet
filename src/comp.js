
import React from 'react';

class CompC extends React.Component{
  constructor(props){
    super(props)
    this.state = {type:""}
  }
  


  render(){
    
    return (
      <>
      <input type="text" onChange={(e) => this.setState({type :e.target.value}) }/>
      <button onClick={() => this.props.fct(this.state.type)}>rechercher</button>
      
      </>
    )
  }

}

export default CompC;
