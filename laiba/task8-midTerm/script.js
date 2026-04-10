const output = document.getElementById("output");

//////////////////////////////
// 1 ES6 FEATURES
//////////////////////////////
function runES6() {
  output.innerHTML = "<h3>ES6 Demo</h3>";

  // var vs let vs const
  var a = 10;
  let b = 20;
  const c = 30;

  a = 15; // allowed
  b = 25; // allowed
  // c = 35; not allowed

  // Arrow function
  const square = (num) => num * num;

  // Class
  class Student {
    constructor(name, marks) {
      this.name = name;
      this.marks = marks;
    }

    display() {
      return `Name: ${this.name}, Marks: ${this.marks}`;
    }
  }

  const s1 = new Student("Ali", 85);

  output.innerHTML += `
    <p>var: ${a}, let: ${b}, const: ${c}</p>
    <p>Square of 5: ${square(5)}</p>
    <p>${s1.display()}</p>
  `;
}

//////////////////////////////
// 2 JSON HANDLING
//////////////////////////////
function runJSON() {
  output.innerHTML = "<h3>JSON Demo</h3>";

  const obj = {
    name: "Qudsia",
    age: 21,
    course: "Web Engineering"
  };

  const jsonData = JSON.stringify(obj);
  const parsedData = JSON.parse(jsonData);

  console.log(jsonData);
  console.log(parsedData);

  output.innerHTML += `
    <p>JSON: ${jsonData}</p>
    <p>Parsed Name: ${parsedData.name}</p>
  `;
}

//////////////////////////////
// 3FETCH POSTS
//////////////////////////////
async function fetchPosts() {
  output.innerHTML = "<h3>Posts</h3>";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const firstFive = data.slice(0, 5);

    firstFive.forEach(post => {
      output.innerHTML += `<p>${post.title}</p>`;
    });

  } catch (error) {
    output.innerHTML += `<p>Error: ${error.message}</p>`;
  }
}

//////////////////////////////
//  ASYNC + ERROR HANDLING
//////////////////////////////

// SUCCESS
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      output.innerHTML = "<h3>Users</h3>";
      data.forEach(user => {
        output.innerHTML += `<p>${user.name}</p>`;
      });
    })
    .catch(err => {
      output.innerHTML = `<p>Error: ${err.message}</p>`;
    });
}

//  FAILURE
function fetchError() {
  fetch("https://wrongurl.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      output.innerHTML = "This should not work";
    })
    .catch(err => {
      output.innerHTML = `<p style="color:red;"> Error handled: ${err.message}</p>`;
    });
}