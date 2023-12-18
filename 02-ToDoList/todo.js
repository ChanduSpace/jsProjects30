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
}

let list = document.querySelectorAll(".task");

list.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.tagName === "li") {
      e.target.classList.toggle("done");
    } else if (e.target.tagName === "span") {
      e.target.parentElement.remove();
    }
  });
});

// // addTask();
