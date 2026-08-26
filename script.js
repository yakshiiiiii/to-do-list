function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}