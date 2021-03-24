/*function load() {
	let id = document.getElementById("result");
	id.innerHTML = "Lab W1D2";
} */

function nameString(obj) {
    if(obj===null){
return "null argument";
}
if(obj===undefined || obj===null){
	return "no object passes";
}
if(obj.length===0){
	return "object has no properties";
}
let arr=[];
for(let i in obj){
	arr.push(i)
}
arr.sort();
let str=arr.join('.')
return str;
}