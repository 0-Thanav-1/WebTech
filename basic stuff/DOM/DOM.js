//DOM
// let heading = document.getElementById("heading");
// console.dir(heading);

// let heading1 = document.getElementsByClassName("heading1");
// console.dir(heading1);// we get htmlcollections , similar to an array. 

// let tag = document.getElementsByTagName("p");
// console.dir(tag);


// let firstEl = document.querySelector("p"); // returns only the first elemnt
// console.log(firstEl);

// let allEl = document.querySelectorAll("p"); // returns all Elements.
// console.log(allEl);

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para);

// let cla = para.setAttribute("class","newPara");


// let div = document.querySelector("div");
// div.style.backgroundColor = "lavender";
// div.style.borderWidth = "8px";
// div.style.borderstyle = "grooved";


//events

// let button = document.querySelector("button");
// button.onclick = () => {
//         document.write("you choose the wrong option");
//         alert("why did you choose me?")
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     alert('Dont touch me! you jerk.');
// }


//Event to change mode of the page
// let button = document.querySelector("#mode");
// currMode = "white";

// button.addEventListener ("click",() => {
//     if(currMode === 'white') {
//         currMode = "Dark";
//         document.querySelector("body").style.backgroundColor = "grey";
//         document.querySelector("button").style.backgroundColor = "grey";
//     }
//     else{
//         currMode = "white";
//         document.querySelector("body").style.backgroundColor = "white";
//         document.querySelector("button").style.backgroundColor = "white";
//     }
//     console.log(currMode);

// })
//we can evern use class list to do the same


//perfoming the above task using mouse over
// let button = document.querySelector("button");
// let body = document.querySelector("body");
// currMode = "light";

// button.addEventListener("mouseover", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");

//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// })




 