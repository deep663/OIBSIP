let display = document.getElementById("display");
let input = "";

function appendInput(value) {
    input += value;
    display.value = input;
}

function calculate() {
    try {
        let result = eval(input);
        display.value = result;
        input = "";
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
    input = "";
}
