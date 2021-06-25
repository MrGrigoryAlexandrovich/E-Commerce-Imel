import React from 'react'
import '../css/PaymentPage.css'
export default function Payment() {
    return (
        <div className="PaymentPage">
           <span className="PaymentProvider">Payment provider</span>
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
           <button className="goToConfirm">Continue to Confirm</button>
        </div>
    )
}
