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