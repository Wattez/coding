function calc() {

    var number1 = parseInt(document.querySelector("#num1").value);
    var number2 = parseInt(document.querySelector("#num2").value);
    var type = document.querySelector("#typevalue").value;
    var calculate;

    if (type == "plus") {
        calculate = number1 + number2;
    }
    else if (type == "minus") {
        calculate = number1 - number2;
    }
    else if (type == "multiply") {
        calculate = number1 * number2;
    }
    else if (type == "divide") {
        calculate = number1 / number2;
    }
    
   document.querySelector("#result").innerHTML = calculate;
    
};