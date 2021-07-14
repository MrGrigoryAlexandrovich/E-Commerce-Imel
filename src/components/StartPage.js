import '../css/StartPage.css'
import '../css/responsive/StartPage-360.css'
import React from 'react'
import {useHistory} from "react-router-dom";
import Navigation from './Navigation'
export default function StartPage() {
    let history = useHistory();
    return (
        <div className="StartPage">
                <div className="WomenPhoto" onClick={()=>history.push('/women')}></div>
                <span className="WomenText">Women</span>
                <div className="SaleWomenPhoto" onClick={()=>history.push('/women')}></div>
                <span className="SaleWomenText1">Sale</span>  <span className="SaleWomenText2">(Women)</span>

                <div className="MenPhoto" onClick={()=>history.push('/men')}></div>
                <span className="MenText">Men</span>
                <div className="SaleMenPhoto" onClick={()=>history.push('/men')}></div>
                <span className="SaleMenText1">Sale</span>  <span className="SaleMenText2">(Men)</span>

                <div className="MenBottomPhoto" onClick={()=>history.push('/men')}></div>
                <div className="WomenBottomPhoto" onClick={()=>history.push('/women')}></div>
                <Navigation/>
            </div>
    )
}
