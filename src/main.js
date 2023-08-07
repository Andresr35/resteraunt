import Pizza from "./pizaa.jpeg";

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

  export default renderMain();