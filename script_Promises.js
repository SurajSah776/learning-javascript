let logo = document.getElementsByClassName("logo")[0];

logo.innerHTML = "<img src='./github.svg' width='53px' height='53px'>"


// Promises in JS
console.log("Outside Promise");

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1")
        // resolve(100)
        reject(new Error("Error Occured"))
    }, 3000)
});

promise1.then((val) => {
    console.log(val);

}).catch((err) => {
    console.log(err)
})


const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Inside Promise 2")
        resolve(100)
        reject(new Error("Error in Promise 2"))
    }, 1000);
})
// Multiple Handler

pr2.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
});

pr2.then((valu) => {
    console.log(valu);
});

pr2.then((valu) => {
    console.log(valu);
});

// Promise API
console.log("\nPromise API")
const prom_all = Promise.race([promise1, pr2]);

console.log(prom_all);