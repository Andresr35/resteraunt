import "normalize.css";
import "./style.css";
import Main from './main.js';
import About from "./about";
import Contact from './contact';


const nav = () => {
  const navElement = document.createElement("nav");

  const h1 = document.createElement("h1");
  h1.innerText = "Andres' Pizza Company";

  const ul = document.createElement("ul");

  const home = document.createElement("li");
  home.innerText = "Home";
home.addEventListener('click',()=>{
    render(Main);
})

  const about = document.createElement("li");
  about.innerText = "About";
about.addEventListener('click',()=>{
    render(About);
})

  const contact = document.createElement("li");
  contact.addEventListener('click',()=>{
    render(Contact);
  })
  contact.innerText = "Contact Us";

  ul.appendChild(home);
  ul.appendChild(about);
  ul.appendChild(contact);
  navElement.appendChild(h1);
  navElement.appendChild(ul);

  return navElement;
};

function render(element) {
  const content = document.querySelector("body");
    content.replaceChildren();
  content.appendChild(nav());
  content.appendChild(element);
};

render(Main);
