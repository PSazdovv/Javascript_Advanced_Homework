const getUserButton = document.getElementById("getUserButton");
const userDataContainer = document.getElementById("userData");

getUserButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      const table = document.createElement("table");

      for (const key in data) {
        const row = document.createElement("tr");
        const keyCell = document.createElement("td");
        const valueCell = document.createElement("td");

        keyCell.textContent = key;
        valueCell.textContent =
          typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        table.appendChild(row);
      }

      userDataContainer.innerHTML = "";
      userDataContainer.appendChild(table);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
