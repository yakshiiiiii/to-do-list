// console.log("My to do list is working!");
function addtask(){
let taskinput=document.getElementById("taskinput");
let task=taskinput.value;
let li=document.createElement("li");
li.textContent=task;
document.getElementById("tasklist").appendChild(li);
taskinput.value="";
}