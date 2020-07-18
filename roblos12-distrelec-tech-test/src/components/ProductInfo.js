import React from 'react';

const ProductInfo = (props) => {
  return (
    <div className='cardsInfoContainer'>
    <h3>Product details</h3>
    <div>Article Information</div>
    <p className='infoDetails'>The MKR WIFI 1010 is a significant improvement on the MKR 1000 WIFI. It's equipped with an ESP32 module made by U-BLOX. This board aims to speed up and simplify the prototyping of WiFi based IoT applications thanks to the flexibility of the ESP32 module and its low power consumption.</p>
    <ul>
    <li>SAMD21 Cortex-M0+ 32bit Low Power ARM MCU</li>
    <li>U-BLOX NINA-W10 Series Low Power 2.4GHz IEEE® 802.11b/g/n Wi-Fi</li>
    <li>Secured by ECC508 Crypto Authentication</li>
    </ul>
    <div className='productInfo'>
    <div>
    <div>Environmental information</div>
    <p className='subInfoProduct'><span>RoHS</span><span>RoHS</span></p>
    </div>
    <div>
    <div>Additional information</div>
    <p className='subInfoProduct'><span>Country of origin</span><span>India (IN)</span></p>
    <p className='subInfoProduct'><span>Manufacturer</span><span>Arduino</span></p>
    <p className='subInfoProduct'><span>Gross weight (incl. package)</span><span>21.0 Gram</span></p>
    <p className='subInfoProduct'><span>Dimensions (incl. package)</span><span>80 x 60 x 25 MM</span></p>
    <p className='subInfoProduct'><span>Customs number</span><span>8523520000</span></p>
    <p className='subInfoProduct'><span>UNSPSC (v5.03)</span><span>32101703</span></p>
    <p className='subInfoProduct'><span>EAN</span><span>7630049200258</span></p>
    </div>
    </div>
    </div>
  );
}

export default ProductInfo;
