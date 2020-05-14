
window.document.addEventListener('click', event => {
    let input1 = document.getElementById('js-lengthOfCircle');
    let input = document.getElementById('js-perimOfsquare');
    let answerArea = document.getElementById('js-resIsFit');
    let currentInput = event.target;
    
    const WHATTODO = (value1, value) => {
        const diametr = value1 / Math.PI;
        const squareBorder = value / 4;
        return diametr < squareBorder;
    }

    const ANSWER = (value) => {
        if (input === currentInput) {
            if (value){
                return answerArea.innerHTML = NAME + ", circle fit this square";
            }
            return answerArea.innerHTML = NAME + ", circle does not fit this square";
        }
    }

    const CHECKINPUT = () => {
        if (input.checkValidity() && input1.checkValidity()) {
            const value = WHATTODO(input1.value, input.value);
            return ANSWER(value);
        } else {
            window.setTimeout(CHECKINPUT, 1000);
        }
    }
    
    CHECKINPUT();


});