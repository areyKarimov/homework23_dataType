window.document.addEventListener('click', event => {
    let dateOfBirth = document.getElementById('js-dateOfBirth');
    let currentDate = new Date().getTime();
    let answereOnAge = document.getElementById('js-age');
    let currentInput = event.target;

    const COUNTAGE = (birthDate) => {
        const birthDateParse = Date.parse(birthDate);
        const age = (currentDate - birthDateParse);
        return Math.floor(age / 31536000000);
    }

    const ANSWER = (yourAge) => {
        if (dateOfBirth === currentInput) {
            if (yourAge >= 0 && yourAge <= 2) {
                return answereOnAge.innerHTML = NAME + ", you baby.";
            } else if (yourAge > 3 && yourAge <= 12) {
                return answereOnAge.innerHTML = NAME + ", you child.";
            } else if (yourAge > 13 && yourAge <= 18) {
                return answereOnAge.innerHTML = NAME + ", you teenager.";
            } else if (yourAge > 19 && yourAge <= 60) {
                return answereOnAge.innerHTML = NAME + ", you in age.";
            } else if (yourAge > 60 && yourAge <= 130) {
                return answereOnAge.innerHTML = NAME + ", you pensioner.";
            } else {
                return answereOnAge.innerHTML = NAME + ", something went wrone.. Repick date please=)";
            }
        }
    }

    const CHECKINPUT = () => {
        if (dateOfBirth.checkValidity()) {
            const userAge = COUNTAGE(dateOfBirth.value);
            return ANSWER(userAge);
        } else {
            window.setTimeout(CHECKINPUT, 100);
        }
    }

    CHECKINPUT();


});
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
const TABS = document.querySelectorAll('.nav__link');
const WRAPPERS = document.querySelectorAll('.wrapper__inner');

const removeActiveClasses = () => {
    for (let i of[...TABS]) {
        i.classList.remove('active');
    }
    for (let i of[...WRAPPERS]) {
        i.classList.remove('active');
    }
}


window.document.addEventListener('click', event => {
    let currentTab = event.target.parentElement;
    let indCurrentTab = [...TABS].indexOf(currentTab);
    if ([...TABS].includes(currentTab)) {
        removeActiveClasses();
        currentTab.classList.add('active');
        [...WRAPPERS][indCurrentTab].classList.add('active');
    }
});
const NAME = prompt("What's your name?=", 'noname');
const NAMEREQUEST = () => {
    const SPAN = document.getElementsByTagName("span");
    const CONTAINER = document.querySelector('.container');
    for (var i = 0; i < [...SPAN].length; i++) {
        if (SPAN[i].innerHTML === 'Noname') {
            SPAN[i].innerHTML = NAME;
        };
    };
    CONTAINER.style.opacity = '1';
}
if (document.readyState = 'complete') {
    NAMEREQUEST();
}