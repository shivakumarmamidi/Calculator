let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            string = eval(string);
        } else if (buttonText === 'AC') {
            string = "";
        } else if (buttonText === 'DEL') {
            string=string.substring(0, string.length - 1);
        } else {
            string += buttonText;
        }

        input.value = string;
    })
})
