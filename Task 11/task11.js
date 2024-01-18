const skillsForm = document.getElementById("skillsForm");
const skillsInput = document.getElementById("skills");
const userSkills = document.getElementById("userSkills");
const tableContainer = document.getElementById("tableContainer");

skillsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let userskillsValue = skillsInput.value;

  await createSkill(userskillsValue);
});

const createSkill = async (userSkillsValue) => {
  const body = {
    userskills: userSkillsValue,
  };
  try {
    const response = await fetch(
      "https://testapi.io/api/rupus51/resource/skills",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const userSkillsData = await response.json(); // Changed variable name
    alert("Success");
  } catch (error) {
    console.error(error);
  }
};

function createTable() {
  const tableContainer = document.getElementById("tableContainer");

  const table = document.createElement("table");
  table.border = "1";

  // Create the table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["ID", "Skills", "Action"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body with 3 rows
  const tbody = document.createElement("tbody");
  for (let i = 1; i <= 3; i++) {
    const row = document.createElement("tr");

    // ID column
    const idCell = document.createElement("td");
    idCell.textContent = i;
    row.appendChild(idCell);

    // Skills column
    const skillsCell = document.createElement("td");
    skillsCell.textContent = `Skill ${i}`;
    row.appendChild(skillsCell);

    // Action column with a button
    const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = `Action ${i}`;
    actionCell.appendChild(button);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  // Append the table to the tableContainer
  tableContainer.appendChild(table);
}

// Call the function to create the table
createTable();
