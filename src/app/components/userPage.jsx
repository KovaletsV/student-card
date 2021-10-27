import React from "react";
import { useHistory } from "react-router-dom";

const UserPage = () => {
  const history = useHistory();
  const handleToCreateUser = () => {
    history.push("/createUser");
  };
  const handleToChangeUser = () => {
    history.push("/changeUser");
  };
  //Рендерим строку вывода возраста
  const renderPhrase = (age) => {
    const lastOne = Number(age.toString().slice(-1));
    if (age > 4 && age < 21) return "лет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "года";
    if (lastOne === 1) return "год";
  };

  //Получаем данные из localStorage
  const userRaw = localStorage.getItem("data");
  const user = JSON.parse(userRaw);
  //Получаем текущий возраст
  const currentAge = new Date().getFullYear() - user.dateOfBirth;

  if (user) {
    return (
      <div className={"container center-block"}>
        <h1>Карточка студента</h1>
        <div>
          Имя:
          {user.firstName}
        </div>
        <div>
          Фамилия:
          {user.surname}
        </div>
        <div>
          Год рождения:
          {`${user.dateOfBirth},  ${currentAge} ${renderPhrase(currentAge)}`}
        </div>
        <div>
          Портфолио:
          <a href={`${user.portfolio}`}>{user.portfolio}</a>
        </div>
        <button className={"btn btn-primary mt-2"} onClick={handleToChangeUser}>
          Редактировать
        </button>
      </div>
    );
  }
  return (
    <div className={"container center-block"}>
      <h1>Карточка студента</h1>
      <div>Нет данных</div>
      <button className={"btn btn-primary mt-2"} onClick={handleToCreateUser}>
        Добавить
      </button>
    </div>
  );
};

export default UserPage;
