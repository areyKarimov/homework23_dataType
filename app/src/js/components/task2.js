
window.document.addEventListener('click', event => {
    let exchangeNum = document.getElementById('js-exchangeNum');
    let answerArea = document.getElementById('js-exchangeNumAnswer');
    let currentInput = event.target;
    const SYMBOLS = ['!', '@', '#', '$', '%', '^', '&', '*', '(' ,')'];
    
    const WHATTODO = (value) => {
        return SYMBOLS[value - 1];
    }

    const ANSWER = (value) => {
        if (exchangeNum === currentInput) {
            return answerArea.innerHTML = NAME + "it's your symbol = " + value;
        }
    }

    const CHECKINPUT = () => {
        if (exchangeNum.checkValidity()) {
            const value = WHATTODO(+exchangeNum.value);
            return ANSWER(value);
        } else {
            window.setTimeout(CHECKINPUT, 100);
        }
    }
    
    

    CHECKINPUT();


});