import "normalize.css";
import "./style.css";
import Pizza from "./pizaa.jpeg";


const nav = () => {
  const navElement = document.createElement("nav");

  const h1 = document.createElement("h1");
  h1.innerText = "Andres' Pizza Company";

  const ul = document.createElement("ul");

  const home = document.createElement("li");
  home.innerText = "Home";
home.addEventListener('click',()=>{
    render(renderMain());
})

  const about = document.createElement("li");
  about.innerText = "About";
about.addEventListener('click',()=>{
    render(renderAbout());
})

  const contact = document.createElement("li");
  contact.addEventListener('click',()=>{
    render(renderContact());
  })
  contact.innerText = "Contact Us";

  ul.appendChild(home);
  ul.appendChild(about);
  ul.appendChild(contact);
  navElement.appendChild(h1);
  navElement.appendChild(ul);

  return navElement;
};

const renderMain = () => {
  const mainElement = document.createElement("main");

  const mission = document.createElement("div");
  mission.innerHTML =
    "We handmake all pizza's from tossing the dough, to growing the tomatoes! It's all fresh! If you've seen <i>The Bear</i> on Hulu, we are just like them!";
  mission.classList.add("missionStatement");

  const quote = document.createElement("div");
  quote.textContent =
    '"The food was so amazing. I will definitely be coming back!"- Random Customer';
  quote.classList.add("quote");

  const pizzaImage = new Image();
  pizzaImage.src = Pizza;

  const button = document.createElement('button');
  button.innerText = "Order Online Now!";

  mainElement.appendChild(mission);
  mainElement.appendChild(quote);
  mainElement.appendChild(pizzaImage);
  mainElement.appendChild(button);
  return mainElement;
};

const renderAbout = () =>{
   const aboutElement = document.createElement('main');
   aboutElement.innerHTML = "This is the about page"
   return aboutElement;
};

const renderContact=()=>{
    const contact = document.createElement('main');
    contact.innerHTML = "This is the contact page... dont contact me"
    return contact;
};

function render(element) {
  const content = document.querySelector("body");
    content.replaceChildren();
  content.appendChild(nav());
  content.appendChild(element);
};

render(renderMain());
