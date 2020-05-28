const fetchButton = document.querySelector(".button");
const outputDiv = document.querySelector(".output");
const url = "https://cat-fact.herokuapp.com/facts";
let click = 0;
let facts;

function fetchFacts() {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      facts = data;
    });
}

document.addEventListener("DOMContentLoaded", fetchFacts());

fetchButton.addEventListener("click", (event) => {
  outputDiv.innerHTML = "";
  fact = facts.all[click].text;
  fixedFact = fact
    .replace("Cats", "Dogs")
    .replace("Cat", "Dog")
    .replace("cat", "dog")
    .replace("cats", "dogs")
    .replace("gato", "Hound");

  outputDiv.innerHTML += fixedFact;
  click++;
});
