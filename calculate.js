

function calculate(inputValue) {
    document.getElementById('showResult').value += inputValue;
}

function remove() {
    document.getElementById('showResult').value = '';
}

function result() {
    let showResult = document.getElementById('showResult').value;
    let evalFunc = eval (showResult);
    document.getElementById('showResult').value = evalFunc;
}