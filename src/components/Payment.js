import React from 'react'
import '../css/PaymentPage.css'
import '../css/responsive/Payment-1024.css'
import {Link } from "react-router-dom";
export default function Payment() {
    return (
        <div className="PaymentPage">
           <span className="PaymentProvider">Payment provider</span>
           <div className="Payments">
           <div className="PayPal">
           </div>
           <div className="PayPalPhoto"></div>
           <div className="Stripe">
           </div>
           <div className="StripePhoto"></div>
           <div className="ApplePay">
           </div>
           <div className="ApplePhoto"></div>
           <div className="Klarna">
           </div>
           <div className="KlarnaPhoto"></div>
           </div>
           <Link to="/contact/confirm"><button className="goToConfirm">Continue to Confirm</button></Link>
        </div>
    )
}
