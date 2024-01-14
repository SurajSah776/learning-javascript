// Script for changing the button
let btn2 = document.querySelector("[data-btn2]");
function bgChange() {
    btn2.style.background = "purple";
}

let btn3 = document.querySelector("[data-btn3]");
function textChange() {
    btn3.innerHTML = "Changed text";
    btn3.style = "color:blue; background-color:cyan; font-weight:bold;"
}


// Practice Set 9

// let btn = document.querySelector("[data-ex9]");

// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(src + " \nDone Successfully");
//         }
//         btn.append(script);
//     });
// }



// QN-1

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
// a.then((value) => {
//     console.log(value);
// })



// QN-2

// const main1 = async () => {
//     console.log("Hello\n\n");
//     console.log(new Date().getSeconds());

//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getSeconds());
// };

// main1();



// QN-3

// let pr = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Rejecting After 3 Seconds"));
//         }, 3000);
//     })
// }

// let a = async () => {
//     try {
//         let rec = await pr();
//         console.log(rec);
//     } catch (err) {
//         console.log("This Error has been handled");
//     }
// }

// a();



// QN-4

// Promise-1
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3000);
    })
}

// Promise-2
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    })
}

// Promise-3
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 4000);
    })
}

let run = async () => {
    console.time("run")
    // Not optimized
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();

    // Optimised
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let pr = await Promise.all([a1, a2, a3]);

    console.log(a1, a2, a3);
    console.log(pr);
    console.timeEnd("run");
}

run();