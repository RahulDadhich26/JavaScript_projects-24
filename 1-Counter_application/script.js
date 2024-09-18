// counter application 

const count = document.querySelector(".count") ;
const add = document.querySelector(".add") ;
const subtract = document.querySelector(".subtract") ;
const reset_count = document.querySelector(".reset");

// lets add an eventlistener which will listen to the click event and increments the count.
add.addEventListener("click" , () => {
    count.innerHTML++;
    changeColor() ;
});

// Let's add an EventListener. which will listen to the click event and decrements the count.
subtract.addEventListener("click" , () => {
    count.innerHTML--;
    changeColor() ;
});

// Let's add an EventListener, which will listen to the click event and resets the count (i.e 0).

reset_count.addEventListener("click" , () => {
    count.innerHTML = 0 ;
    changeColor() ;
});
 // lets create a function  and change clour based on different conditions matches.

function changeColor() {
    if(count.innerHTML < 0){
        count.Style.color = "aqua";
    }
    else if(count.innerHTML > 0){
        count.Style.color = "green";
    }
    else{
        count.style.color = "whilte";
    }
}
