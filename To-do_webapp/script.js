const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let tasks = [];

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    tasks.push({
      name: inputBox.value,
      completed: false,
    });
    inputBox.value = "";
    renderTasks();
  }
}

function renderTasks() {
  listContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.name;
    if (task.completed) {
      listItem.classList.add("checked");
    }
    listContainer.appendChild(listItem);
  });
}

function filterTasks(filter) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "pending") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
  });
  renderFilteredTasks(filteredTasks);
}

function renderFilteredTasks(filteredTasks) {
  listContainer.innerHTML = "";
  filteredTasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.name;
    if (task.completed) {
      listItem.classList.add("checked");
    }
    listContainer.appendChild(listItem);
  });
}

function clearTasks() {
    tasks = [];
    renderTasks();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      const taskName = e.target.textContent;
      const task = tasks.find((t) => t.name === taskName);
      if (task) {
        task.completed = !task.completed;
      }
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
