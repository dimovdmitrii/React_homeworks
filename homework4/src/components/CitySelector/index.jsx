import React from "react";

function CitySelector({ onSelect }) {
  const cities = [
    {
      name: "Токио",
      description: "Столица Японии, известная своими неоновыми огнями...",
      imageUrl:
        "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей.",
      ],
    },
    {
      name: "Киото",
      description: "Город на острове Хонсю, известный своими храмами...",
      imageUrl:
        "https://content.r9cdn.net/rimg/dimg/83/d4/85f68013-city-20339-16489ec9b8b.jpg?crop=true&width=1020&height=498",
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет.",
      ],
    },
    {
      name: "Осака",
      description: "Город в центральной части острова Хонсю...",
      imageUrl:
        "https://content.r9cdn.net/rimg/dimg/45/5f/5788029f-city-25901-16e9488a141.jpg?crop=true&width=1020&height=498",
      facts: [
        "Осака известна своим замком...",
        "Город является кулинарной столицей Японии.",
      ],
    },
    {
      name: "Хоккайдо",
      description: "Самый северный остров Японии...",
      imageUrl:
        "https://farm5.staticflickr.com/4898/45883767454_7be63f71de_o.jpg",
      facts: [
        "Отличные условия для зимних видов спорта.",
        "Летом остров привлекает туристов своими лавандовыми полями.",
      ],
    },
    {
      name: "Нагоя",
      description: "Город в центре Хонсю...",
      imageUrl:
        "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
      facts: [
        "Центр автомобилестроения Японии.",
        "Знаменитый замок с позолоченными дельфинами.",
      ],
    },
  ];

  const handleChange = (e) => {
    const selectedCityName = e.target.value;
    const selectedCity = cities.find((city) => city.name === selectedCityName);
    onSelect(selectedCity);
  };

  return (
    <div>
      <h2>Выберите город</h2>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          -- выберите город --
        </option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
