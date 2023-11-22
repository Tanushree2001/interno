// import "../scss/style.scss"
import { animate } from "../node_modules"

setTimeout(() => {
  const twelve = document.querySelector(".twelve")
  const eightyfive = document.querySelector(".eighty-five")
  const fifteen = document.querySelector(".fifteen")
  const nintyfive = document.querySelector(".ninty-five")

  animate(
    (progress) => {
      twelve.innerHTML = Math.round(progress * 12);
      eightyfive.innerHTML = Math.round(progress * 85);
      fifteen.innerHTML = Math.round(progress * 15);
      nintyfive.innerHTML = Math.round(progress * 95);
    },
    { duration: 2, easing: "ease-out" }
  );
}, 1000)