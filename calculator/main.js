const teclasId = ['ac','back','divi','seven','eight','nine','multi','four','five','six','sub','one','two','three','sum','zero','coma','equal']
const teclas = [];
let result = '0'; 
const resultE = document.getElementById('result');
let op = [];
let lastPushNum = false;

/* Afegeix element DOM al array */
teclasId.forEach(function(tecla){
  teclas.push(document.getElementById(tecla));
})

let teclaMouseOver = (e) => {
  e.target.style.backgroundColor = "rgb(240, 171, 24)";
}

let teclaMouseOut = (e) => {
  e.target.style.backgroundColor = '';
}

let teclaMouseDown = (e) => {
  e.target.style.backgroundColor = "rgb(240, 106, 112)";
}

let teclaMouseUp = (e) => {
  e.target.style.backgroundColor = '';
}

let teclaMouseClick = (e) => {
  switch (e.target.id) {
    case "zero": case "one": case "two": case "three": case "four": case "five": case "six": case "seven": case "eight": case "nine": 
      op.push(op.slice(-1) + document.getElementById(e.target.id).innerHTML);
      lastPushNum = true; 
      break;
    case "coma":
      if (lastPushNum){
        op.push(op.slice(-1) + ".");
      }
      lastPushNum = false; 
      break;
    case "ac": 
      resetAll();
      lastPushNum = false; 
      break;
    case "back":
      back();
      lastPushNum = false; 
      break;
    case "divi": 
      if (lastPushNum){
        if (existOperator()){ doOp(); };
        op.push(op.slice(-1) + " / ");
      }
      lastPushNum = false; 
      break;
    case "multi": 
      if (lastPushNum){
        if (existOperator()){ doOp(); }; 
        op.push(op.slice(-1) + " x ");
      }
      lastPushNum = false; 
      break;
    case "sum": 
      if (lastPushNum){
        if (existOperator()){ doOp(); }; 
        op.push(op.slice(-1) + " + ");
      }
      lastPushNum = false; 
      break;
    case "sub": 
      if (lastPushNum){
        if (existOperator()){ doOp(); }; 
        op.push(op.slice(-1) + " - ");
      }
      lastPushNum = false; 
      break;
    case "equal": 
      if (lastPushNum){
        if (existOperator()){ doOp(); }; 
      }
      break;
    default:
      break;
  }

  result = op.slice(-1);
  reduceFontSize();
  resultE.innerHTML = result; 
}

let assignEvents = (tecla) =>{
  tecla.onmouseover = teclaMouseOver;
  tecla.onmouseout = teclaMouseOut;
  tecla.onmousedown = teclaMouseDown;
  tecla.onmouseup = teclaMouseUp;
  tecla.onclick = teclaMouseClick;
}

/* AC */
let resetAll = () => {
  result = 0; 
  op = [result];
}

/* back button */
let back = () => {
  op.pop();
}

/* Check if there's any operator existing on the string */
let existOperator = () => {
  let str = op.slice(-1).toString().split("");

  for(let i = 0; i < str.length-1; i++){
    if (str[i] === "/" || str[i] === "x" || str[i] === "-" || str[i] === "+"){
      return true; 
    }
  }
  return false;
}

/* Operating.. */ 
let doOp = () => {
  let var1 = ""; 
  let var2 = ""; 
  let operador = "";
  let str = op.slice(-1).toString().split("");
  let res; 

  for(let i = 0; i < str.length; i++){
    if (str[i] === "/" || str[i] === "x" || str[i] === "-" || str[i] === "+"){
      operador = str[i];
    } else if (operador === ""){
        var1 = var1 + str[i];
    } else {
        var2 = var2 + str[i];
      }
  }
  
  switch (operador) {
    case "/":
      res = parseFloat(var1) / parseFloat(var2);
      break;
    case "x":
      res = parseFloat(var1) * parseFloat(var2);
      break;
    case "+":
      res = parseFloat(var1) + parseFloat(var2);
      break;
    case "-":
      res = parseFloat(var1) - parseFloat(var2);
      break;
    default:
      break;
  }
  
  if (isInt(res)){
    op.push(res);
  } else {
    op.push(res.toFixed(3));
  }

}

/* Check if it's an integer num or have decimals */
let isInt = (n) => {
  return parseInt(n) === n ;
}

/* Reduce font size of the result if it's necessary */ 
let reduceFontSize = () => {
  let str = op.slice(-1).toString().split("");
  if (str.length >= 12){
    document.getElementById('result').style.fontSize = "medium";
  } else {
    document.getElementById('result').style.fontSize = "";
  }
}

/* Crida principal */
teclas.forEach(assignEvents);


/* just a test */
setInterval(function(){

  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      document.getElementById("titol").style.backgroundColor = "yellow";
      break;
    case 2:
      document.getElementById("titol").style.backgroundColor = "orange";
      break;
    case 3:
      document.getElementById("titol").style.backgroundColor = "pink";
      break;
    default:
      break;
  }

},2000,"JavaScript");

