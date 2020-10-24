import React from "react";

function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgscr} alt="mypic" className="cardimage"/>
          <div className="cardinfo">
            <span className="cardcategory">{props.title} </span>
            <h3 className="cardtitle">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div> 
      </div>
    </>
    )
  }
export default Card;
