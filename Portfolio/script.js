// Script for Typewriter Effects

document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Web Developer.", "Tech Enthusiast.", "Problem Solver."];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typewriter-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 150);
        }
    }());
});
