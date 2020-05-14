window.document.addEventListener('click', event => {
    let input = document.getElementById('js-someDate');
    let answerArea = document.getElementById('js-datePlusOneDay');
    let currentInput = event.target;

    const WHATTODO = (value) => {
        const parsedDate = Date.parse(value);
        const age = (parsedDate + (60*60*24*1000));
        const nextDay = String(new Date(age)).split(' ');
        nextDay.length = 4;
        return nextDay;
    }

    const ANSWER = (...value) => {
        if (input === currentInput) { 
            return answerArea.innerHTML = NAME + ", next date is " + value.join(' ');
        }
    }

    const CHECKINPUT = () => {
        if (input.checkValidity()) {
            const value = WHATTODO(input.value);
            return ANSWER(value);
        } else {
            window.setTimeout(CHECKINPUT, 100);
        }
    }

    CHECKINPUT();


});