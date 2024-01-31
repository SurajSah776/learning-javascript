let item1 = document.getElementById("first");

item1.style.color = "red";

/*Changing background of all li elements with JavaScript */

let li = document.querySelectorAll(".item");

for (let i = 0; i < li.length; i++) {
    li[i].style.background = "cyan";
}