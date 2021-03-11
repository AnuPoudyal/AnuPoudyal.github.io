"use strict";
/**
 * parameter{number} is number 
 * @returns{number} is number
 */
function appendText(){
    let inputText = document.getElementById("input");
    let outText = document.getElementById("output");
    outText.value +=  inputText.value + " ";
    inputText.value = "";
 }



