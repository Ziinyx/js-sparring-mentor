var billAmount = document.getElementsByClassName("billAmount")[0].value;
var numPeople = document.getElementsByClassName("noOfPeople")[0].value;
let tipPer = document.getElementsByClassName("tip-per");
let ans = Number(document.getElementById("total-amount").innerHTML);
let tipAns = Number(document.getElementById("tip-amount").innerHTML);
			
			
for( let i = 0; i < tipPer.length; i++) {
	tipPer[i].addEventListener('click', () => {
				
		if(numPeople != 0){
			document.getElementsByClassName("error")[0].innerHTML = "";
			tipAns = (billAmount*(tipPer[i].value/100)).toFixed(2)
			ans = (tipAns/numPeople).toFixed(2)
			document.getElementById("tip-amount").innerHTML = "$"+ans
			document.getElementById("total-amount").innerHTML = "$"+tipAns
		}
		else{
			document.getElementsByClassName("error")[0].innerHTML = "Can't be zero";
			document.getElementsByClassName("people").style.borderColor = "red";
		}
	})
}
		
const getValueInput = () => {
	billAmount = document.getElementsByClassName("billAmount")[0].value;
	numPeople = document.getElementsByClassName("noOfPeople")[0].value;
	console.log("billAmount: ",billAmount);
	console.log("no. people ",numPeople);
}

var bill = document.getElementById("billAmount");
		
const btnPer = document.getElementsByClassName("tip-per");
		
		
const handleReset = () => {
	document.getElementsByClassName("billAmount")[0].value = 0;
	document.getElementsByClassName("noOfPeople")[0].value = 0;
	document.getElementById("total-amount").innerHTML = "$0.00";
	document.getElementById("tip-amount").innerHTML = "$0.00";
	document.getElementById("customNo").value = "Custom";
}