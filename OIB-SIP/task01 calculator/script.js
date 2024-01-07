let inputDisplay = document.getElementById("input-display");
let resultDisplay = document.getElementById("result-display");

function show(value) {
    inputDisplay.innerHTML += value;
}

function clearDisplay() {
    inputDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";
}

function backspace() {
    inputDisplay.innerHTML = inputDisplay.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        resultDisplay.innerHTML = eval(inputDisplay.innerHTML);
    } catch (error) {
        resultDisplay.innerHTML = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/().%=]|Backspace|Enter/)) {
        event.preventDefault(); // Prevent default behavior for some keys
        if (key === "Enter") {
            calculate();
        } else if (key === "Backspace") {
            backspace();
        } else {
            show(key);
        }
    }
});