
const btn = document.querySelectorAll("button");
const display = document.getElementById("result");




function clearDisplay(){
    display.value = "";

}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function appendToDisplay(input){
    display.value = display.value + input;
}

function backSpace() {
  display.value = display.value.slice(0, -1);
}