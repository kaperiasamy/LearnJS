/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(); }, 3000)
    //reject();
}).then(() => {
    //resolve();
    console.log("Finally finished!")
}).then(() => {
    console.log("Again finished!")
}).catch(() => {
    //reject();
    console.log("Uh... oh... Something went bad.")
});
*/
let url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
    .then(response => response.json())
    .then(data => { console.log('DATA', data); })
    .catch((error) => console.log('BAD', error) );

