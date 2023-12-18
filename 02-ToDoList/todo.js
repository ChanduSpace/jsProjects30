function addTask() {
  document.querySelector(".error-msg").classList.add("tab");
  let task = document.querySelector(".inputBox").value;
  document.querySelector(".inputBox").value = "";

  if (task == "") {
    document.querySelector(".error-msg").classList.remove("tab");
  } else {
    let listElement = document.createElement("li");
    listElement.innerHTML = task;
    listElement.classList.add("task");
    document.querySelector(".list").appendChild(listElement);

    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7";
    listElement.appendChild(cross);
  }
  saveData();
}
let list = document.querySelector(".list");
list.addEventListener("click", (a) => {
  if (a.target.tagName === "LI") {
    a.target.classList.toggle("done");
    saveData();
  } else if (a.target.tagName === "SPAN") {
    a.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function updateDate() {
  list.innerHTML = localStorage.getItem("data");
}
updateDate();
