document.addEventListener("DOMContentLoaded", () => {
  const scheduleForm = document.getElementById("scheduleForm");
  const output = document.getElementById("output");

  scheduleForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    // Clear previous output
    output.innerHTML = "";

    // Get the selected route
    const routeSelect = document.getElementById("routeSelect");
    const routeName = routeSelect.value;

    // Get all stops
    const stops = document.querySelectorAll(".stopsContainer");

    // Create a table for displaying the submitted data
    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    // Create table headers
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
      <th>Route Name</th>
      <th>Stop Name</th>
      <th>Scheduled Times</th>
    `;
    table.appendChild(headerRow);

    // Populate table rows with the submitted data
    stops.forEach((stop) => {
      const stopName = stop.querySelector(".stopName").value;
      const times = Array.from(stop.querySelectorAll(".stopTime")).map(
        (timeInput) => timeInput.value
      );
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${routeName}</td>
        <td>${stopName}</td>
        <td>${times.join(", ")}</td>
      `;
      table.appendChild(row);
    });

    // Display the table on the page
    output.appendChild(table);
  });
});
