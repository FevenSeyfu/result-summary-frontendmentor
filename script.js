// Fetch and display data from json file
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const summaryContainer = document.querySelector(".summary-container");
    const button = document.querySelector(".summary-container button");

    data.forEach((item) => {
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
