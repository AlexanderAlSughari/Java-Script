const move = document.querySelector(".move");
const slider = document.querySelector(".slider");
const title = document.querySelector("#title");
const line = document.querySelector("#line");

const tl = new TimelineMax();

tl.fromTo(move, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
  .fromTo(move, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
  .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
  .fromTo(title, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
  .fromTo(line, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5");

    

    