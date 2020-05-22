$(document).ready(function(){    


var reponse = document.getElementById('rep');
reponse.addEventListener('click',recup);

function recup() {
var q1= document.getElementById('q1').value;
var rep1=document.getElementById('rep1');
var repq1="7";

if(q1==repq1) 
    {

    $("#q1").css("backgroundColor","green");
    $("#q1").css("color","white");
    }
    else 
    {
        $("#q1").css("backgroundColor","red");
        $("#q1").css("color","white");
        $('#rep1').append(repq1);  
    }

var q2= document.getElementById('q2').value;
var rep1=document.getElementById('rep2');
var repq2="Alfieri";

if(q2==repq2) 
    {

    $("#q2").css("backgroundColor","green");
    $("#q1").css("color","white");

    }
    else 
    {
        $("#q2").css("backgroundColor","red");
        $("#q2").css("color","white");
        $('#rep2').append(repq2);  
    }
}








});