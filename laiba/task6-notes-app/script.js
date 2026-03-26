class NotesApp {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
  }

  add(note) {
    this.notes.push(note);
    this.save();
  }

  delete(index) {
    this.notes = this.notes.filter((_, i) => i !== index);
    this.save();
  }

  save() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}

const app = new NotesApp();

const addNote = () => {
  const input = document.getElementById("note");
  app.add(input.value);
  input.value = "";
  render();
};

const render = () => {
  const list = document.getElementById("notes");
  list.innerHTML = "";

  app.notes.forEach((n, i) => {
    list.innerHTML += `
      <li>
        ${n}
        <button onclick="deleteNote(${i})">❌</button>
      </li>
    `;
  });
};

const deleteNote = (i) => {
  app.delete(i);
  render();
};

render();