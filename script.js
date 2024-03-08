// Fetch and display data from json file
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const header = document.querySelector('header');

    const summaryContainer = document.querySelector(".summary-container");
    const button = document.querySelector(".summary-container button");

    // get the average score
    const sum = data.reduce((total, item) => total + item.score, 0);
    const averageScore = Math.floor(sum / data.length);

    const resultCircle = document.createElement("div");
    resultCircle.className = "result-circle";
    resultCircle.innerHTML = `<span>${averageScore}</span> of 100`;

    // Insert resultCircle after header
    header.parentNode.insertBefore(resultCircle, header.nextSibling);

    data.forEach((item) => {
      // results section
      const sum = data.reduce((total, item) => total + item.score, 0);
      const averageScore = Math.floor(sum / data.length);
      const categoryDiv = document.createElement("div");
      categoryDiv.className = `summary-box ${item.category.toLowerCase()}`;
      categoryDiv.innerHTML = `
        <p class="title">
          <img src="${item.icon}" alt="${item.category.toLowerCase()}-icon" />
          ${item.category}
        </p>
        <p class="score">${item.score} <span>/ 100</span></p>
      `;
      summaryContainer.insertBefore(categoryDiv, button);
    });
  })
  .catch((error) => console.error("Error:", error));
