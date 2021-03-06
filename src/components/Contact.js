import React from 'react'
import {BrowserRouter as Router, Switch, Route,NavLink} from "react-router-dom";
import '../css/Contact.css'
import '../css/responsive/Contact-1024.css'
import '../css/responsive/Contact-360.css'
import Information from './Information'
import Payment from './Payment'
import Confirm from './Confirm'
export default function Contact() {
    return (
        <Router>
        <div className="Contact">
           <svg className='cos' width="66" height="21" viewBox="0 0 66 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2454 19.0773C13.6668 19.0773 15.9136 18.5419 18.5096 17.3446V19.2673C15.9136 20.4646 13.6668 21 11.2454 21C5.04648 21 0 16.5502 0 10.1258C0 9.77467 0.0116412 9.4523 0.0407443 9.11266C0.494753 15.0419 5.34915 19.0773 11.2454 19.0773ZM3.11403 8.19737C3.11403 3.43092 6.79848 0.253289 11.2454 0.253289C13.6668 0.253289 16.0882 0.915296 18.5096 2.45806V4.38076C16.0882 2.84375 13.6668 2.17599 11.2454 2.17599C7.15936 2.17599 3.62625 4.87007 3.17224 9.1875C3.13731 8.87665 3.11403 8.54276 3.11403 8.19737ZM46.2565 10.1258C46.2565 16.1242 41.3264 20.9885 35.2613 20.9885C29.1962 20.9885 24.2778 16.1242 24.2778 10.1258C24.2778 9.78618 24.2894 9.47533 24.3185 9.14145C24.7958 14.7023 29.5105 19.0658 35.2613 19.0658C41.0004 19.0658 45.7268 14.7023 46.2157 9.15296C46.2448 9.47533 46.2565 9.80345 46.2565 10.1258ZM43.1657 8.16858C43.1657 3.7648 39.6268 0.310855 35.2846 0.310855C30.9366 0.310855 27.4035 3.7648 27.4035 8.16858C27.4035 8.51398 27.4151 8.83059 27.4559 9.16447C27.9215 5.22122 31.2509 2.23931 35.2846 2.23931C39.3299 2.23931 42.6593 5.22122 43.1133 9.17599C43.1541 8.8421 43.1657 8.50822 43.1657 8.16858ZM66 14.8174C66 18.4441 62.6706 20.9942 58.5962 20.9942C55.6218 20.9942 52.8687 19.9581 51.041 17.713L52.112 16.8783C53.864 18.3865 56.1457 19.0715 58.5962 19.0715C62.3272 19.0715 65.4296 16.9301 65.9243 13.7928C65.9767 14.1151 66 14.4548 66 14.8174ZM62.9675 12.8947C62.9675 13.2919 62.9151 13.6316 62.8161 13.9539C61.4948 10.31 51.6172 11.5592 51.6172 4.85855C51.6172 4.52467 51.6405 4.21957 51.6929 3.92023C52.6882 9.9301 62.9675 8.4046 62.9675 12.8947ZM64.4808 0.972862C64.8592 1.26069 65.2142 1.58306 65.5285 1.95724L63.4506 3.83964C62.3505 2.75164 60.6625 1.92845 58.5321 1.92845C56.7918 1.92845 55.3192 2.59046 54.8244 3.85115C54.708 3.57484 54.6381 3.28701 54.6381 2.9301C54.6381 1.01891 56.3669 0 58.5321 0C60.6625 0 62.3505 0.823191 63.4506 1.91118L64.4808 0.972862Z" fill="#444444"/>
</svg>
<div className="v1"></div>
<div className="v2"></div>
<NavLink to='/contact/information' id="information"  activeClassName="menuActive" style={{ textDecoration: 'none' }}><p ><br></br>Information</p></NavLink>
<NavLink to='/contact/payment' id="payment" activeClassName="menuActive" style={{ textDecoration: 'none' }}><p><br></br>Payment</p></NavLink>
<NavLink to='/contact/confirm'id="confirm" activeClassName="menuActive" style={{ textDecoration: 'none' }}><p><br></br>Confirm</p></NavLink>
        <div className="menu">
        </div>
            <div className="content">
                <Switch>
                    <Route path="/contact/information" exact>
                        <Information/>
                    </Route>
                    <Route path="/contact/payment">
                        <Payment />
                    </Route>
                    <Route path="/contact/confirm">
                    <Confirm />
                    </Route>
            
                </Switch>
            </div>
<div className="CartCard">
    <div className="CardBackground">
    <span className="subtotalP">???405</span>
        <span className="taxesP">???81</span>
        <span className="totalP">???486</span>
        <span className="CardTitle">Cart</span>
        <span className="subTxt">Subtotal</span>
        <span className="taxesTxt">Taxes</span>
        <span className="totalTxt">Total</span>
        <hr className="line1"></hr>
        <hr className="line2"></hr>
    </div>
</div>

<div className="CardItem1">
    <div className="cardPhoto1"></div>
    <span className="cardText1">RECYCLED POLYESTER PERFORMANCE PARKA</span>
    <span className="cardPrice1">???135 x 1 </span>
</div>
<div className="CardItem2">
    <div className="cardPhoto2"></div>
    <span className="cardText2">RECYCLED POLYESTER PERFORMANCE PARKA</span>
    <span className="cardPrice2">???135 x 2 </span>
</div>
        </div>
        </Router>
    )
}
