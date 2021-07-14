import React, {useEffect} from 'react'
import '../css/Women.css'
import '../css/responsive/Women-1024.css'
import '../css/responsive/Women-360.css'
import Navigation from './Navigation'
import {useHistory} from "react-router-dom";
export default function Women() {
    let history = useHistory();
    useEffect(() => {
            var items1 = document.getElementsByClassName('women1');
            var items2 = document.getElementsByClassName('women2');
            var items3 = document.getElementsByClassName('women3');
            var items4 = document.getElementsByClassName('women4');
            for (var i = 0; i < 4; i++) {
              items1[i].addEventListener('click', selectProduct);
              items2[i].addEventListener('click', selectProduct);
              items3[i].addEventListener('click', selectProduct);
              items4[i].addEventListener('click', selectProduct);
            }
    });
    function selectProduct() {
        let id = this.className.substring(5)
        history.push('/productpage/women/'+id)
    }
    return (
        <div className="Women">
              <span id="title">Women</span>
              <div className="photos">
              <div alt='' className="women1" onClick={()=>selectProduct()}></div>
              <div alt='' className="women2" onClick={()=>selectProduct()}></div>
              <div alt='' className="women3" onClick={()=>selectProduct()}></div>
              <div alt='' className="women4" onClick={()=>selectProduct()}> </div>
              <div alt='' className="women1" onClick={()=>selectProduct()}></div>
              <div alt='' className="women2" onClick={()=>selectProduct()}></div>
              <div alt='' className="women3" onClick={()=>selectProduct()}></div>
              <div alt='' className="women4" onClick={()=>selectProduct()}></div>
              <div alt='' className="women1" onClick={()=>selectProduct()}></div>             
              <div alt='' className="women2" onClick={()=>selectProduct()}></div>           
              <div alt='' className="women3" onClick={()=>selectProduct()}></div>             
              <div alt='' className="women4" onClick={()=>selectProduct()}></div>      
              <div alt='' className="women1" onClick={()=>selectProduct()}></div>
              <div alt='' className="women2" onClick={()=>selectProduct()}></div>
              <div alt='' className="women3" onClick={()=>selectProduct()}></div>
              <div alt='' className="women4" onClick={()=>selectProduct()}></div>
              </div>
              <p className="TextStyle" id="textposition1">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition2">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition3">RECYCLED POLYESTER PERFORMANCE PARKA</p> 
               <p className="TextStyle" id="textposition4">RECYCLED POLYESTER PERFORMANCE PARKA</p> 
               <p className="TextStyle" id="textposition5">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition6">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition7">RECYCLED POLYESTER PERFORMANCE PARKA</p> 
               <p className="TextStyle" id="textposition8">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition9">RECYCLED POLYESTER PERFORMANCE PARKA</p> 
               <p className="TextStyle" id="textposition10">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition11">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition12">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition13">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="TextStyle" id="textposition15">RECYCLED POLYESTER PERFORMANCE PARKA</p>
               <p className="PriceStyle" id="priceposition1">€135</p>
               <p className="PriceStyle" id="priceposition2">€135</p>
               <p className="PriceStyle" id="priceposition3">€135</p>
               <p className="PriceStyle2" id="priceposition4">€99</p>
               <p className="PriceStyle" id="priceposition44">€135</p>
               <p className="PriceStyle2" id="priceposition5" >€99</p>  
               <p className="PriceStyle" id="priceposition55" >€135</p>
               <p className="PriceStyle" id="priceposition6">€135</p>
               <p className="PriceStyle" id="priceposition7">€135</p>
               <p className="PriceStyle" id="priceposition8">€135</p>
               <p className="PriceStyle" id="priceposition9">€135</p>
               <p className="PriceStyle" id="priceposition10">€135</p>
               <p className="PriceStyle" id="priceposition11">€135</p>
               <p className="PriceStyle" id="priceposition12">€135</p>
               <p className="PriceStyle" id="priceposition13">€135</p>
               <p className="PriceStyle" id="priceposition15">€135</p>
              <Navigation />
        </div>
    )
}
