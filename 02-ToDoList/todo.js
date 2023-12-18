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
    // listElement.classList.add("task");
    listElement.appendChild(cross);
  }
}
let list = document.querySelector(".list");
list.addEventListener("click", (a) => {
  if (a.target.tagName === "LI") {
    a.target.classList.toggle("done");
  } else if (a.target.tagName === "SPAN") {
    a.target.parentElement.remove();
  }
});

// // addTask();
