
window.document.addEventListener('click', event => {
    let input = document.getElementById('js-numForCheck');
    let answerArea = document.getElementById('js-isPalindrom');
    let currentInput = event.target;
    
    const WHATTODO = (value) => {
        let res;
        if (value.length === 1) {
            return true;
        }
        for (let i = 0; i < Math.floor(value.length / 2); i++) {
            if (value[i] === value[value.length - i-1]){
                res = true;
                continue;
            } else {
                res = false;
                return res;
            }  
        }
        return res;
    }

    const ANSWER = (value) => {
        if (input === currentInput) {
            if (value) {
                return answerArea.innerHTML = NAME + ", it's polindrome!";
            }
            return answerArea.innerHTML = NAME + ", it's not polindrome!";
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