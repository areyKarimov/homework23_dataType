
window.document.addEventListener('click', event => {
    let input = document.getElementById('js-sameNum');
    let answerArea = document.getElementById('js-isSameNum');
    let currentInput = event.target;
    
    const WHATTODO = (value) => {
        let res = false;
        [...value].forEach(element => {
            let sum = 0;
            [...value].forEach(element2 =>{
                if (element2 === element) {
                    sum++;
                    if (sum > 1){
                        return res = true;
                    }
                }
            })
        })
        return res;
    }

    const ANSWER = (value) => {
        if (input === currentInput) {
            if (input.value.length < 3){
                return answerArea.innerHTML = NAME + ", your digit to short!"; 
            }
            if (value) {
                return answerArea.innerHTML = NAME + ", your digit has same numbers!";
            }
            return answerArea.innerHTML = NAME + ", your digit has not same numbers!";
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