// Define the endpoint URLs
const endpoint1 = "https://jsonplaceholder.typicode.com/photos/1";
const endpoint2 = "https://jsonplaceholder.typicode.com/photos/2";
const endpoint3 = "https://jsonplaceholder.typicode.com/photos/13";

// Function to fetch data from an endpoint
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to display data in cards
async function displayDataInCards() {
  const container = document.getElementById("cardsContainer");

  // Fetch data from each endpoint
  const data1 = await fetchData(endpoint1);
  const data2 = await fetchData(endpoint2);
  const data3 = await fetchData(endpoint3);

  // Combine all data into an array
  const allData = [data1, data2, data3];

  // Iterate over each data item and create a card
  allData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const image = document.createElement("img");
    image.src = item.thumbnailUrl;
    image.alt = item.title;

    card.appendChild(title);
    card.appendChild(image);
    container.appendChild(card);
  });
}

// Call the function to display data in cards when the page loads
window.onload = displayDataInCards;
