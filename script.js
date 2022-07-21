function enter_val(val){
  document.getElementById("values").value+=val;
}
function bkspce(){  document.getElementById("values").value=document.getElementById("values").value.slice(0,-1);
}
function clrscr(){
  document.getElementById("values").value="";
}
function solve(){
  let y=document.getElementById("values").value;
  let x=eval(y);
  if(x=="Infinity"){
    alert("Invalid operation! \nDivision by zero is not defined!");
    document.getElementById("values").value="";
  }
  else{
    var n=x.toFixed(7);
  document.getElementById("values").value=n;
  }
}