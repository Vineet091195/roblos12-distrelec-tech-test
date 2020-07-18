import React from 'react';

const CardComponent = (props) => {
  return (
    <a href={props.url} className='cardContainer'>
    <div className='imageContiner'>
    <img src={props.src} alt={props.alt}/>
    </div>
    <div className='infoContainer'>
    <h5>{props.title}</h5>
    <div className='subInfo'>
    <div>{props.stock}</div>
    <div><strong>{`${props.currency}${props.price}`}</strong></div>
    </div>
    </div>
    </a>
  );
}

export default CardComponent;
