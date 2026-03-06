let currentPage = 1;
const itemsPerPage = 5;
let users = [];

// Fetch data from API using AJAX (fetch)
const fetchUsers = () => {

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
users = data;
displayUsers();
});

}

// Display users for current page
const displayUsers = () => {

let start = (currentPage - 1) * itemsPerPage;
let end = start + itemsPerPage;

let pageData = users.slice(start, end);

let output = "";

pageData.map(user => {
output += `<p>${user.id} - ${user.name} (${user.email})</p>`;
});

document.getElementById("data").innerHTML = output;

}

// Next Page
const nextPage = () => {

if((currentPage * itemsPerPage) < users.length){
currentPage++;
displayUsers();
}

}

// Previous Page
const prevPage = () => {

if(currentPage > 1){
currentPage--;
displayUsers();
}

}

// Load data when page opens
fetchUsers();