import 'normalize.css';
import './style.css';
import Pizza from './pizaa.jpeg';

const nav = ()=>{
    const navElement = document.createElement('nav');

    const h1 = document.createElement('h1');
    h1.textContent = "Andres' Pizza Company"

    const ul = document.createElement('ul');

    const home = document.createElement('li'); 
    home.textContent= "Home";
    const about = document.createElement('li'); 
    about.textContent= "About";
    const contact = document.createElement('li'); 
    contact.textContent= "Contact Us";

    ul.appendChild(home);
    ul.appendChild(about);
    ul.appendChild(contact);
    navElement.appendChild(h1);
    navElement.appendChild(ul);

    return navElement;
}

function render(){
    const content = document.querySelector('body');

    content.appendChild(nav());
}


render();