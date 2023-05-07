let result = "";

function addToResult(value) {
  result += value;
  document.getElementById("result").value = result;
}

function clearResult() {
  result = "";
  document.getElementById("result").value = result;
}

function calculate() {
  const answer = eval(result);
  document.getElementById("result").value = answer;
  result = answer.toString();
}

function add() {
  result += "+";
  document.getElementById("result").value = result;
}

function subtract() {
  result += "-";
  document.getElementById("result").value = result;
}

function multiply() {
  result += "*";
  document.getElementById("result").value = result;
}

function divide() {
  result += "/";
  document.getElementById("result").value = result;
}
