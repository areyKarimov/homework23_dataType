
window.document.addEventListener('click', event => {
    let checkbox = document.getElementById('js-discounts');
    let input = document.getElementById('js-valueOfSales');
    let answerArea = document.getElementById('js-resOfBenefit');
    let currentInput = event.target;
    
    const WHATTODO = (value) => {
        switch (checkbox.value){
            case '3%':
                return +value * 0.03;
                break;
            case '5%':
                return +value * 0.05;
                break;
            case '7%':
                return +value * 0.07;
                break;
        }
    }

    const ANSWER = (value) => {
        if (input === currentInput) {
            return answerArea.innerHTML = NAME + ", you receive " + Math.floor(value) + ' from ' + checkbox.value + ' discount.';
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