import '../css/StartPage.css'
import React from 'react'
import {useHistory} from "react-router-dom";
export default function StartPage() {
    let history = useHistory();
    return (
        <div className="StartPage">
                <div className="WomenPhoto"></div>
                <span className="WomenText">Women</span>
                <div className="SaleWomenPhoto"></div>
                <span className="SaleWomenText1">Sale</span>  <span className="SaleWomenText2">(Women)</span>

                <div className="MenPhoto"></div>
                <span className="MenText">Women</span>
                <div className="SaleMenPhoto"></div>
                <span className="SaleMenText1">Sale</span>  <span className="SaleMenText2">(Men)</span>

                <div className="MenBottomPhoto" onClick={()=>history.push('/men')}></div>
                <div className="WomenBottomPhoto" onClick={()=>history.push('/women')}></div>
            </div>
    )
}
