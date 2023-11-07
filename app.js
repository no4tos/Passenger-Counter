/*
document.getElementById('count-el').innerText = count;
console.log(count);
*/

// initialize the count as 0
let count = 0;

// listen for clicks on the increment button
// increment the count variable when the button is clicked

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');

console.log("save-el");
console.log("countEl");

function increment(){
    count += 1;
    
    // change the count-el in the HTML to reflect the new count
    countEl.textContent = count;
}

// Create a function, save(), which logs out the count when it's called
function save() {
     
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - ";
    
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr; // innerText alternative is textContent
    
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0;
    count = 0;
    
}