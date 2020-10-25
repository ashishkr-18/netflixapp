import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render( 
  <>
    <h1 className="heading_style">List of top Netflix series in 2020</h1>
    {Sdata.map((val) => {
      return (
      <Card
      key={val.id}
      imgscr={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.link}
      />
      );
    })}
   
  </>
  ,document.getElementById("root")

);