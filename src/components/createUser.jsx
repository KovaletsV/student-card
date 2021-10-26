import { React, useState, useEffect } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";

const CreateUser = () => {
  const [data, setData] = useState({
    firstName: "",
    surname: "",
    dateOfBirth: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
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
            <button className="btn btn-primary mx-auto mb-4">Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
