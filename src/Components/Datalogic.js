import React from "react";
import "./Datacomp.css";

const Datacomp = (props) => {

  return (
    <div className="container col-3 mt-2">
      <div  className="box">
        <div className="imgBox">
          <img 
            src={props.picture}
            alt={props.name}
          />
        </div>
        <div className="content">
          <h1>ID : {props.id}</h1>
        </div>
      </div>
    </div>
  );
};

export default Datacomp;
