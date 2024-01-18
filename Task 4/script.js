const output = document.getElementById("output");

async function getCarInfo() {
  try {
    const response = await fetch("cars.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    let htmlContent = `<div class="container">`;

    data.forEach((brand) => {
      const brandName = brand.brand;
      const models = brand.models;

      htmlContent += `<div class="brand-models"><h2>${brandName}</h2>`;

      models.forEach((model) => {
        htmlContent += `<p>${model}</p>`;
      });

      htmlContent += `</div>`;
    });

    htmlContent += `</div>`;

    output.innerHTML = htmlContent;
  } catch (error) {
    console.error("Error fetching or parsing the JSON file:", error);
  }
}

getCarInfo();
