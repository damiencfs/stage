$(document).ready(function(){    


var reponse = document.getElementById('rep');
reponse.addEventListener('click',recup);

function recup() {
var compteur=0;
var q1= document.getElementById('q1').value;
var rep1=document.getElementById('rep1');
var repq1="7";

if(q1==repq1) 
    {

    $("#q1").css("backgroundColor","green");
    $("#q1").css("color","white");
    compteur+=1;
    }
    else 
    {
        $("#q1").css("backgroundColor","red");
        $("#q1").css("color","white");
        $('#rep1').append(repq1); 
        compteur==compteur
    }

var q2= document.getElementById('q2').value;
var rep1=document.getElementById('rep2');
var repq2="Alfieri";

if(q2==repq2) 
    {

    $("#q2").css("backgroundColor","green");
    $("#q2").css("color","white");
    compteur+=1;
    }
    else 
    {
        $("#q2").css("backgroundColor","red");
        $("#q2").css("color","white");
        $('#rep2').append(repq2);  
        compteur==compteur
    }

var q3= document.getElementById('q3').value;
var rep3=document.getElementById('rep3');
var repq3="Carlo";

if(q3==repq3) 
    {

    $("#q3").css("backgroundColor","green");
    $("#q3").css("color","white");
    compteur+=1;
    }
    else 
    {
        $("#q3").css("backgroundColor","red");
        $("#q3").css("color","white");
        $('#rep3').append(repq3);  
        compteur==compteur
    }
}








});