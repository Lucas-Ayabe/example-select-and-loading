const games = [
  {
    id: "gi",
    name: "Genshin Impact",
    characters: [
      {
        id: "amber",
        name: "Amber",
      },
      {
        id: "kaeya",
        name: "Kaeya",
      },
      {
        id: "Lisa",
        name: "Lisa",
      },
    ],
  },
  {
    id: "hi3",
    name: "Honkai Impact 3rd",
    characters: [
      {
        id: "k-423",
        name: "Kiana Kaslana",
      },
      {
        id: "raiden-mei",
        name: "Raiden Mei",
      },
      {
        id: "bronya-zaychik",
        name: "Bronya Zaychik",
      },
    ],
  },
];

const findBy = (property) => (value) => {
  return games.find((game) => game[property] === value);
};

const findById = findBy("id");
const findByName = findBy("name");

module.exports = { games, findById, findByName };
