let container = document.querySelector("#container");

const addcontainer = (element , container) => {
    let newel = document.createElement(element.type);
    newel.innerHTML = element.child;
    for(let prop in element.props){
        newel.setAttribute(prop , element.props[prop]);
    }
    container.appendChild(newel);
}

let element = {
    type: 'a',
    props: {
        href: 'https://google.com',
    },
    child: 'click me to go for google',
}

addcontainer(element , container);
