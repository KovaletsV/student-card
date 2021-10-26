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
  const userRaw = localStorage.getItem("data");
  const user = JSON.parse(userRaw);
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
          {`${user.dateOfBirth} (${
            new Date().getFullYear() - user.dateOfBirth
          } лет)`}
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
