// import "./styles.css";
import "./index.html";
lightbox.show();
const cat = {
  name: "Barsik",
  img:
    "https://images.pexels.com/photos/1928151/pexels-photo-1928151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};
const root = document.querySelector("#root");
clg;
const source = document.querySelector("#cat").innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(cat);
console.log(root);
console.log(source);
console.log(template);
console.log(markup);

root.insertAdjacentHTML("afterbegin", markup);

const habits = [
  { title: "Water", alert: true, value: 1, color: ["red", "green", "blue"] },
  { title: "Water", alert: false, value: 2, color: ["red", "green", "blue"] },
  { title: "Water", alert: true, value: 3, color: ["red", "green", "blue"] },
  { title: "Water", alert: false, value: 4, color: ["red", "green", "blue"] },
];

const source1 = document.querySelector("#habit").innerHTML.trim();
const template1 = Handlebars.compile(source1);

const markup1 = template1({ habits });
console.log(markup1);

const habitsList = document.querySelector("#habitsList");
habitsList.insertAdjacentHTML("beforebegin", markup1);
