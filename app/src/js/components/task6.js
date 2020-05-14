
window.document.addEventListener('click', event => {
    let checkbox = document.getElementById('js-currencies');
    let input = document.getElementById('js-valueOfUsd');
    let answerArea = document.getElementById('js-resOfCurrensy');
    let currentInput = event.target;
    
    const WHATTODO = (value) => {
        switch (checkbox.value){
            case 'EUR':
                return +value / 1.11;
                break;
            case 'UAN':
                return +value / 0.037;
                break;
            case 'AZN':
                return +value / 0.59;
                break;
        }
    }

    const ANSWER = (value) => {
        if (input === currentInput) {
            return answerArea.innerHTML = NAME + ", you can change on " + value + ' ' + checkbox.value;
        }
    }

    const CHECKINPUT = () => {
        if (input.checkValidity()) {
            const value = WHATTODO(input.value);
            return ANSWER(value);
        } else {
            window.setTimeout(CHECKINPUT, 1000);
        }
    }
    
    CHECKINPUT();


});