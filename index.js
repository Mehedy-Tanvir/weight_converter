function weightConvert() {

    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    const inputValue = input.value;
    result.style.color = 'black';
    if (inputValue > 0) {
        let kg = (inputValue * 0.45359237).toFixed(2);
        result.innerText = `Your weight in kg is: ${kg}`;
    } else {
        result.style.color = 'red';
        result.innerText = 'Enter a valied value';

    }

}