import React from "react";

const Hello: React.FC<{ name: string }> = (props) => {
  return (<div>By {props.name}!</div>)

};

export default Hello;
