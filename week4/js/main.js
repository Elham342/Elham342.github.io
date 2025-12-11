console.log("Week 4 JS loaded");

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Elements
const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Add task
form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return alert("Write something");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.className = "task-text";

  const btns = document.createElement("div");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "done-btn";
  doneBtn.onclick = () => span.classList.toggle("done");

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => li.remove();

  btns.appendChild(doneBtn);
  btns.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(btns);
  list.appendChild(li);

  input.value = "";
});
