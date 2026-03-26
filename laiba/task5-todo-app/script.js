class Todo {
  constructor(text) {
    this.text = text;
    this.completed = false;
  }
}

let tasks = [];

const addTask = () => {
  const input = document.getElementById("task");
  const task = new Todo(input.value);
  tasks.push(task);
  input.value = "";
  render();
};

const render = () => {
  const list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach((t, index) => {
    list.innerHTML += `
      <li>
        ${t.text}
        <button onclick="deleteTask(${index})">❌</button>
      </li>
    `;
  });
};

const deleteTask = (i) => {
  tasks = tasks.filter((_, index) => index !== i);
  render();
};