import React from 'react'

export default function Information() {
    return (
        <form>
        <span className="contactInfo">Contact Information</span>
        <input type="text" placeholder="Email" className="email"></input>
        <span className="shipping">Shipping address</span>
        <input type="text" placeholder="First Name" className="firstname"></input>
        <input type="text" placeholder="Last Name" className="lastname"></input>
        <input type="text" placeholder="Company (optional)" className="company"></input>
        <input type="text" placeholder="Address" className="address"></input>
        <input type="text" placeholder="Apartment, suite, etc. (optional)" className="apartment"></input>
        <input type="text" placeholder="Postal Code" className="postalcode"></input>
        <input type="text" placeholder="City" className="city"></input>
        <input type="text" placeholder="Country/Region" className="country"></input>
        <input type="text" placeholder="Phone (optional)" className="phone"></input>
        <button className="buttonCart">Continue to Payment</button>
        </form>
    )
}
