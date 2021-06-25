import React from 'react'
import '../css/Confirm.css'
export default function Confirm() {
    const ordered = () => {
        document.querySelector('.toOrder').style.display = "none";
        document.querySelector('.ordered').style.display = "block";
        }
    return (
        <div className="ConfirmPages">
            <div className="toOrder">
            <span className="ConfirmText">Confirm</span>
            <p className="dataText">email@email.com <br></br><br></br>
            <strong>Max Mustermann</strong><br></br> Neutorgasse 49 
            <br></br>8010 Graz <br></br>
            Austria <br></br> <br></br>+43 664 122 224 23 <br></br><br></br>
            PayPal (email@email.com)</p>
            <button className="orderButton" onClick={()=>ordered()}>Order</button>
            </div>
            <div className="ordered">
                <span className="orderedText1">Thank you for your order!</span>
                <span className="orderedText2">The order will be processed within next 48 hours.</span>
            </div>
        </div>
    )
}
