$(dokument).ready(function(){
var c=0;
const q1=$("question1").val();
const q2=$("question2").val();
const q3=$("question3").val();
const q4=$("question4").val();
const q5=$("question5").val();

if(q1=="Python"){c++}
if(q2=="5"){c++}
if(q3=="Bootsrap"){c++}
if(q4=="Windows"){c++}
if(q5=="6 month"){c++}

if(c<=3){
$("result").show();}
else{
$("result1").show();
}
});

