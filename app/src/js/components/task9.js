
window.document.addEventListener('click', event => {
    let input2 = document.getElementById('js-quest-3');
    let input1 = document.getElementById('js-quest-2');
    let input = document.getElementById('js-quest-1');
    let answerArea = document.getElementById('js-resQuiz');
    let currentInput = event.target;
    
    const WHATTODO = (value, value1, value2) => {
        let res = 0;
        if (value === 'London'){
            res += 2;
        }
        if (value1 == 4){
            res += 2;
        }
        if (value2 == 16){
            res += 2;
        }
        return res;
    }

    const ANSWER = (value) => {
        if (input === currentInput) {
            return answerArea.innerHTML = NAME + ", you point is " + value;
        }
    }

    const CHECKINPUT = () => {
        if (input.checkValidity() && input1.checkValidity() && input2.checkValidity()) {
            const value = WHATTODO(input.value, input1.value, input2.value);
            return ANSWER(value);
        } else {
            window.setTimeout(CHECKINPUT, 1000);
        }
    }
    
    CHECKINPUT();


});