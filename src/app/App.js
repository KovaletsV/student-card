import React, { useState } from "react";
import CreateUser from "./components/createUser";
import UserPage from "./components/userPage";
import ChangeUser from "./components/changeUser";

import { Route, Switch } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    firstName: "",
    surname: "",
    dateOfBirth: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Switch>
        <Route exact path={"/"} render={() => <UserPage data={data} />} />
        <Route
          path={"/createUser"}
          render={() => (
            <CreateUser
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
              modal={modal}
              setModal={setModal}
            />
          )}
        />
        <Route
          path={"/changeUser"}
          render={() => (
            <ChangeUser
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
              modal={modal}
              setModal={setModal}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
