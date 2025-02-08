const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//function to add task into the input
function addTask(){
    if(inputBox.value === ""){
        alert("You must write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//function to click on the task once completed
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


//save data into the local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


//display data when page loads back up
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();