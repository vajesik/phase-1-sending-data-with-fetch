// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: "Steve", email: "steve@steve.com" }),
  })
    .then(response => response.json())
    .then(data => document.querySelector("body").append(data.id))
    .catch(error => document.querySelector("body").append(error.message));
}
