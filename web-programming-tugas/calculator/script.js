// JavaScript for Calculator (script.js)
function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let display = document.getElementById("display").value;
    
    // Power operation
    if (display.includes('^')) {
        let [base, exponent] = display.split('^');
        document.getElementById("display").value = Math.pow(base, exponent);
    } else {
        try {
            document.getElementById("display").value = eval(display);
        } catch (error) {
            document.getElementById("display").value = "Error";
        }
    }
}
