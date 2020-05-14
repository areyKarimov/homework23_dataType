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