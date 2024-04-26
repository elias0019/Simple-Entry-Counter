
/*
   JavaScript functions for incrementing, decrementing, and saving counts.
*/

function myfun() {
    var count = parseInt(document.getElementById("count-el").innerHTML); /* Get current count */
    count++; /* Increment count */
    document.getElementById("count-el").innerHTML = count; /* Update count displayed */
}

function myfun2() {
    var count = parseInt(document.getElementById("count-el").innerHTML); /* Get current count */
    count--; /* Decrement count */
    document.getElementById("count-el").innerHTML = count; /* Update count displayed */
    if (count < 0) {
        document.getElementById("count-el").innerHTML = 0; /* Ensure count doesn't go below zero */
    }
}

function save() {
    var count = parseInt(document.getElementById("count-el").innerHTML); /* Get current count */
    var prevElement = document.getElementById("prev"); /* Get previous element */
    prevElement.innerHTML += count + " - "; /* Append current count to previous element */
}



