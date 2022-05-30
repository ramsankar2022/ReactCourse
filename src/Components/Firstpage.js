import React from "react";

export default class FirstPage extends React.Component { 

  render() {      
    return (        
      <div style={{
        marginLeft: 500,
        marginTop: 50,
        borderColor: "black",
        borderStyle: "solid",
        padding:10,
        width:400,
        textAlign:"center"
      }}>        
        <h1 >ASSIGNMENT 1 </h1>
        <h4 >Welcome to my first page in React!!!</h4>      
      </div>
    );
  }
}
