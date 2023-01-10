import React from 'react';

class CompR extends React.Component{
  constructor(elem){
    super(elem)
    
  }
  
  render(){
    
    return (
      <>
       {this.props.elem.map((e)=><p>{e.nom}</p>)}
      </>
    )
  }

}

export default CompR;
