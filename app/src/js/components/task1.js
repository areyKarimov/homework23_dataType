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