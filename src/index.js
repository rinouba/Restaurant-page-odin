import "./styles.css";

// import contents
import Content from "./contents/Contact";
import Home from "./contents/Home";
import Menu from "./contents/Menu";

const restaurantPage = () => {
  const element = document.createElement("div");
  const switchTaps = document.querySelectorAll(".switchTaps")
  const content = document.getElementById("content")

  element.appendChild(Home())
  switchTaps.forEach((item,idx) => {
    item.addEventListener("click",() => {
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
        if (idx==0) {
          content.appendChild(Home())
        }else if (idx==1){
          content.appendChild(Menu())  
        }else if (idx==2){
          content.appendChild(Content())
        }
    })
  });
  return element;
};

document.querySelector("#content").appendChild(restaurantPage());
