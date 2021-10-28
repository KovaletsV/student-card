import { React, useEffect } from "react";
import TextField from "./textField";
import { validator } from "../../utils/validator";
import { useHistory } from "react-router-dom";

const CreateUser = ({ data, setData, errors, setErrors, modal, setModal }) => {
  const history = useHistory();
  const addData = () => {
    localStorage.setItem("data", JSON.stringify(data));
    setModal(true);
  };

  const HideModal = () => {
    history.push("/");
    setModal(false);
  };

  useEffect(() => {
    validate();
  }, [data]);

  //Создаем метод валидации
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  //Создаем метод для отправки формы по нажатию кнопки
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  //Конфигурацию для отображения ошибок
  const validatorConfig = {
    firstName: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
    },
    surname: {
      isRequired: {
        message: "Фамилия обязательно для заполнения",
      },
    },
    dateOfBirth: {
      isRequired: {
        message: "Дата рождения обязательно для заполнения",
      },
      isValidYear: {
        number: true,
        message: "Введите корректный год рождения",
      },
    },
    portfolio: {
      isRequired: {
        message: "Поле 'Портфолио' обязательно для заполнения",
      },
      isPortfolioLink: {
        message: "Ссылка введена не корректно",
      },
    },
  };

  //
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-md-6 offset-md-3 shadow">
          <h3 className="mb-4">Создать карточку студента</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <TextField
              label="Фамилия"
              name="surname"
              value={data.surname}
              onChange={handleChange}
              error={errors.surname}
            />
            <TextField
              label="Дата рождения"
              type="number"
              name="dateOfBirth"
              value={data.dateOfBirth}
              onChange={handleChange}
              error={errors.dateOfBirth}
            />
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            <button className="btn btn-primary mx-auto mb-4" onClick={addData}>
              Создать
            </button>
          </form>
        </div>
      </div>
      {modal === true ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-4">
              <h6 className={"mb-4"}>Обновлено</h6>
              <button
                type={"button"}
                className={"btn btn-light"}
                onClick={HideModal}
              >
                Скрыть
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateUser;
