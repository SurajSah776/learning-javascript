// let tableName = prompt("Enter Your Name : ")

document.getElementById("prg").style.background = "yellow";
document.getElementById("prg").style.color = "red";
document.querySelector("table").style.color = "red";
document.querySelector(".para").style.color = "black";

let tab = document.querySelector("h2");
tab.style.color = "orange";

let tub = document.querySelectorAll("h2");
tub[0].style.color = "blue";
tub[1].style.color = "purple";

let t = document.getElementsByTagName("p");
t[0].style.color = "black";

let sm = document.getElementsByClassName("heading");
sm[0].style.color = "blue"

let name1 = document.getElementsByName("heads");

name1[0].style.color = "black";


// document.querySelectorAll("td")[4].getElementsByClassName("para")[0].style.color = "blue";

// matches(), closest() and contains
// matches()
let id1 = document.getElementById("prg");
console.log("matches() : " + id1.matches(".para"));

console.log("matches() : " + id1.matches("h2"));


// closest()
let id2 = document.getElementById("prg");
console.log("closest() : " + id2.closest(".para"));

console.log("closest() : " + id2.closest("h2"));

console.log("closest() : " + id2.closest("table"));

// contains()
let id3 = document.getElementsByClassName("h1")[0];
let cls = document.getElementById("prg").contains(id3);
console.log(cls);
// console.log("contains() : " + cls.contains(id3));
