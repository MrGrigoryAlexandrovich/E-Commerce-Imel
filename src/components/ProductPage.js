import React, {useEffect,useState} from 'react'
import Navigation from './Navigation'
import '../css/ProductPage.css'
export default function ProductPage() {
    let [MainImage, setMainImage] = useState('');
    const displayCart = () => {
    document.querySelector('.CartContainer').style.display = "block";
    }
    useEffect(() => {
        for(let i =1;i<=5;i++) {
        var thumb = document.querySelector('#thumb'+i)
        thumb.addEventListener('click',changePhoto)
        }
    });

    function changePhoto () {
    if(MainImage==='') {
    document.querySelector('#thumb1').style.border = 'none'
     setMainImage(this.id);
    document.querySelector('.'+this.id).classList.add('activeThumb')
    }
    else {
        document.querySelector('#'+MainImage).classList.remove('activeThumb')
        setMainImage(this.id);
        document.querySelector('.'+this.id).classList.add('activeThumb')
    }
  }

    return (
    <div className='ProductPage'>
        <div id={MainImage} className="image"></div>
             <div className="thumb1" id="thumb1" alt=''></div>
             <div className="thumb2 "id="thumb2" alt=''></div>
             <div className="thumb3"id="thumb3" alt=''></div>
             <div className="thumb4" id="thumb4" alt=''></div>
             <div className="thumb5" id="thumb5" alt=''></div>
             <span className="title">RECYCLED POLYESTER PERFORMANCE PARKA</span>
             <span className="price">€135</span>
             <div className="descriptiondiv">
             <p className="description">Crafted from an organic cotton-mulberry silk mix, this<br></br> oversized cardigan features a elasticated body and <br></br>
             dropped shoulder. Effortlessly style with tonal shorts<br></br>and pumps. <br></br> <br></br>      
            - Relaxed fit <br></br>
            - Dropped shoulder <br></br>
            - Elasticated body <br></br>
            - Ribbed cuff <br></br> <br></br>
            32% Polyamide, 29% Viscose, 23% Mulberry silk, 15% <br></br> Organic cotton, 1% Elastane / Machine washable <br></br> <br></br>
            Back length of size XS/S is 70cm </p>
        </div>
        <button className="CartButton" onClick={()=>displayCart()}>Add to Cart</button>
        <p className="structure">32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton /<br></br> 
        1% Elastane / Machine washable <br></br> <br></br>
        Make sure that your favourite items remain long-loved <br></br>
        pieces for years to come; read our product care guide <br></br>
        and explore our selection of carefully chosen care <br></br>
        products. <br></br><br></br>
        Product No:<br></br>
        0930647001</p>
    
        <p className="otherText">You might also like</p>
        <div className="rPhoto1"></div>
        <div className="rPhoto2"></div>
        <div className="rPhoto3"></div>
        <p className='rText1'>RECYCLED POLYESTER PERFORMANCE PARKA</p>
        <p className='rText2'>RECYCLED POLYESTER PERFORMANCE PARKA</p>
        <p className='rText3'>RECYCLED POLYESTER PERFORMANCE PARKA</p>
        <p className="rPrice1">€135</p>
        <p className="rPrice2">€135</p>
        <p className="rPrice3">€135</p>
        <div className="CartContainer">
        <div className="Cart">
                     <div className="CB"></div>
                     <span className="Subtotal">Subtotal</span>
                     <span className="SubtotalP">€405</span>
                     <span className="Total">Total</span>
                     <span className="TotalP">€406</span>
                     <span className="Taxes">Taxes</span>
                     <span className="TaxesP">€81</span>
                     <hr className="line1"></hr>
                     <hr className="line2"></hr>
                     <p className="CartText">Cart</p>
                </div>
                <button className="Checkout">Checkout</button>
                <div className="CI1">
                    <div className="CP1"></div>
                    <span className="CT1">RECYCLED POLYESTER PERFORMANCE PARKA</span>
                    <span className="CPP1">€135 x 1</span>
                </div>
                
                <div className="CI2">
                <div className="CP2"></div>
                    <span className="CT2">RECYCLED POLYESTER PERFORMANCE PARKA</span>
                    <span className="CPP2">€135 x 1</span>
                </div>
                </div>
        <Navigation/>
    </div>
    )
}
