function findCharactersByGameId(id) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  };

  return fetch("http://localhost:3000", options)
    .then((response) => response.json())
    .then(({ game }) => game.characters)
    .catch(console.error);
}

const gameField = document.querySelector("#game");
const characterField = document.querySelector("#character");
const loading = characterField.querySelector("option:first-child");

gameField.addEventListener("change", async () => {
  characterField.innerHTML = "";
  loading.innerHTML = "loading characters...";
  characterField.append(loading);
  const characters = await findCharactersByGameId(gameField.value);
  loading.innerHTML = "Choose character";
  characterField.innerHTML += characters
    .map((character) => `<option>${character.name}</option>`)
    .join("");
});
