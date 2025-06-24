import React from "react";

function ListsComponent() {
  return (
    <div>
      <h2>Списки</h2>

      <h3>Упорядоченный список</h3>
      <ol>
        <li>
          Пункт 1
          <ol>
            <li>Вложенный пункт</li>
          </ol>
        </li>
        <li>Пункт 2</li>
      </ol>

      <h3>Неупорядоченный список</h3>
      <ul>
        <li>
          Элемент A
          <ul>
            <li>Вложенный элемент</li>
          </ul>
        </li>
        <li>Элемент B</li>
      </ul>
    </div>
  );
}

export default ListsComponent;
