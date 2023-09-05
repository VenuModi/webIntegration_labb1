
const getElement = (selector) =>{

    const element = document.querySelector(selector);
    if(element) return element
    throw Error ('Please double check your class names, there is no ${selector} class')
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

function setupParagraph(){
    const p1 = document.querySelector("#p1");

    fetch("contact.json")
    .then((response) => response.json())
    .then((data) => {
        p1.textContent = data[0].p1;
    });
}
setupParagraph();