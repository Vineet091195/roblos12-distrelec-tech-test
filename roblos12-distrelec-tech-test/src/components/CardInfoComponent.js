import React from 'react';
import CardComponent from './CardComponent';

const CardInfoComponent = (props) => {
  return (
    <div className='cardsInfoContainer'>
    <h3>{props.title}</h3>
    <div className='carouselContainer'>
    {props.data.map((item, index) => (
      <CardComponent
      key={item.itemPositionOneBased}
      src={item.productImageUrl}
      title={item.name}
      alt={item.productImageAltText}
      stock={'Stock'}
      price={item.price.formattedValue}
      currency={item.price.currency}
      url={item.url}
      />
  ))}
    </div>
    {props.buttonVisible && <div className='buttonContainer'><button onClick={props.buttonClick}>View more products…</button></div>}
    </div>
  );
}

export default CardInfoComponent;
