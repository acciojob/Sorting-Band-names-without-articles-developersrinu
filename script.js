//your code here
// script.js
let bandNames = ["The Beatles", "Pink Floyd", "Led Zeppelin", "The Rolling Stones", "Nirvana", "The Who", "Radiohead"];

function sortBandNames(bandNames) {
  const articles = ["a", "an", "the"];

  // Custom sort function
  function compareBandNames(a, b) {
    const nameA = removeArticles(a).toLowerCase();
    const nameB = removeArticles(b).toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  }

  // Function to remove articles from band names
  function removeArticles(name) {
    const words = name.split(" ");
    const filteredWords = words.filter((word) => !articles.includes(word.toLowerCase()));
    return filteredWords.join(" ");
  }

  // Sort the band names
  bandNames.sort(compareBandNames);

  // Display the sorted band names in an HTML list
  const bandList = document.getElementById("band");
  bandNames.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

// Call the function with the band names array
sortBandNames(bandNames);

