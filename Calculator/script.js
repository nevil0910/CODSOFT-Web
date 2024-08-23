let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        handleInput(b.target.innerText);
    });
});

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key === 'Enter') key = '='; // Map Enter key to equal sign functionality
    if (key === 'Backspace') key = 'DEL';
    if (key === 'Escape') key = 'AC';

    // Allow only numbers and specific symbols
    if (/^[0-9+\-*/%=.]$/.test(key) || key === 'AC' || key === 'DEL' || key === '=' || key === '±') {
        handleInput(key);
    }

    event.preventDefault(); // Prevent default behavior for handled keys
});

function handleInput(input) {
    if (input === '=') {
        if (string.trim() !== '') {  // Check if there's a valid expression to evaluate
            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch (error) {
                inputBox.value = "Error(Press AC)";
            }
        }
    } else if (input === 'AC') {
        string = '';
        inputBox.value = '';
    } else if (input === 'DEL') {
        string = string.substring(0, string.length - 1);
        inputBox.value = string;
    } else if (input === '±') {
        if (string.trim() !== '') {
            string = String(-eval(string));
            inputBox.value = string;
        }
    } else {
        string += input;
        inputBox.value = string;
    }
}
