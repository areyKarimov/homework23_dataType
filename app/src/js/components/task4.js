
window.document.addEventListener('click', event => {
    let input = document.getElementById('js-yearForCheck');
    let answerArea = document.getElementById('js-isLeapYear');
    let currentInput = event.target;
    
    const WHATTODO = (value) => {
        if (value % 400 === 0) {
            return true;
        }
        if (value % 4 === 0 && value % 100 !== 0) {
            return true;
        }
        return false;
    }

    const ANSWER = (value) => {
        if (input === currentInput) {
            if (value) {
                return answerArea.innerHTML = NAME + ", your year is leap-year!";
            }
            return answerArea.innerHTML = NAME + ", your year is not leap-year!";
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