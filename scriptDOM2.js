// let msg = "Suraj Kumar Sah";
// let splitted = msg.split(" ");
// console.log(msg);
// console.log(splitted);

// nodeName / tagName
// console.log(document.body.firstChild.nodeName)
// let nodename1 = console.log(document.body.firstElementChild.nodeName)

// console.log(document.body.firstChild.tagName)
// let tagname1 = console.log(document.body.firstElementChild.tagName)

// console.log(nodename1 === tagname1)

// innerHTML / outerHTML
// let heading3 = document.getElementsByTagName("h3")[0];

// console.log(heading3.innerHTML)
// console.log(heading3.outerHTML)

// let para = document.getElementsByClassName("inner-outer")[0];

// para.innerHTML = '<p style="color:red; background-color:yellow;">I am innerHTML</p>'

// para.outerHTML = '<h2 style="color:red; background-color:yellow;">I am innerHTML</h2>';


// textContent, hidden property
// console.log(document.body.firstElementChild.textContent);
// let par = document.getElementsByClassName("inner")[0];
// console.log(par.textContent);
// par.textContent = "I am textContent";
// par.hidden = true;

// console.log(par.hasAttribute("hidden"));
// console.log(par.getAttribute("class"));
// par.setAttribute("id", "inner-para");
// console.log(par.outerHTML)
// par.removeAttribute("class");
// console.log(par.outerHTML)

// data-* attributes
// console.log(par.dataset);
// console.log(par.dataset.namee);


// Insertion methods
// let toAdd = '<div class="added" style="border:1px solid red; background-color:cyan;">I am added using JS</div>'
// let newE = document.createElement("div");
// newE.innerHTML = toAdd;
// par.append(newE);
// par.prepend(newE);
// par.before(newE);
// par.after(newE);
// par.replaceWith(newE);


// insertAdjacentHTML / Text / Element

// par.insertAdjacentHTML("afterbegin", toAdd);
// par.insertAdjacentHTML("beforebegin", toAdd);
// par.insertAdjacentHTML("afterend", toAdd);
// par.insertAdjacentHTML("beforeend", toAdd);

// setTimeout and setInterval
let fun = function simpleMsg() {
    alert("You clicked me")
    alert(num)
}

let btn = document.getElementById("btn1");
console.log(btn)
btn.addEventListener("click", fun)