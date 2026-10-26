import React, { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import data from "./data"; // Импортируем локальные данные

function App() {
  // Сразу передаем данные из файла, отключаем загрузку
  const [tours, setTours] = useState(data); 

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Функция для возврата туров (кнопка Refresh)
  const refreshTours = () => {
    setTours(data);
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={refreshTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;