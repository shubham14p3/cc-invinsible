// import "./Card.css";
import React from 'react';

function Card(props) {
    console.log(props);
  return (
    <>
      <div className="cards">
        <div className="car d">  
          <img src={props.imgSrc} alt="myPic"  className="card__img"/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="_blank">
            // eslint-disable-next-line
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
