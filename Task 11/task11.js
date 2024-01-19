const output = document.getElementById("output");

const renderSkills = (skill) => {
  const tableRow = document.createElement("tr");

  const idCell = document.createElement("td");
  idCell.textContent = skill.id;
  tableRow.appendChild(idCell);

  const skillsCell = document.createElement("td");
  skillsCell.textContent = skill.userskills;
  tableRow.appendChild(skillsCell);

  const actionCell = document.createElement("td");
  actionCell.classList.add("action-cell");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  actionCell.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    deleteSkill(skill.id);
    tableRow.remove();
  });

  tableRow.appendChild(actionCell);

  output.appendChild(tableRow);
};

const getSkills = async () => {
  output.innerHTML = "";
  const tableHeader = document.createElement("tr");

  const idHeader = document.createElement("th");
  idHeader.textContent = "ID";
  tableHeader.appendChild(idHeader);

  const skillsHeader = document.createElement("th");
  skillsHeader.textContent = "Skills";
  tableHeader.appendChild(skillsHeader);

  const actionHeader = document.createElement("th");
  actionHeader.textContent = "Action";
  tableHeader.appendChild(actionHeader);

  output.appendChild(tableHeader);

  try {
    const response = await fetch(
      "https://testapi.io/api/rupus51/resource/skills",
      {
        method: "GET",
      }
    );
    const userskills = await response.json();
    userskills.data.forEach((skill) => {
      renderSkills(skill);
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteSkill = async (id) => {
  try {
    await fetch(`https://testapi.io/api/rupus51/resource/skills/${id}`, {
      method: "DELETE",
    });
    await getSkills();
  } catch (error) {
    console.error(error);
  }
};

getSkills();
