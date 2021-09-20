import React from "react";

const Country = (props) => {
  return (
    <div>
      <h5>region : {props.region}</h5>
      <h3>name: {props.name}</h3>
    </div>
  );
};

export default Country;