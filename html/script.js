"use strict";
/**
 * @param{string} is string
 * @returns {string} is string
 * 
 */
function showFullName(){
let fName=document.getElementById("fname").Value;
let lName=document.getElementById("lname").Value;
let fullName=fName+" "+lName;
document.getElementById("output").innerHTML=fullName;
}