const container = document.getElementById("data");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.map(({ name, email, phone }) => {
      container.innerHTML += `
        <div class="card">
          <h3>${name}</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
      `;
    });
  })
  .catch(err => console.log(err));