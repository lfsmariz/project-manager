import { useContext, useState } from "react";
import { UserContext } from "../../context/User/UserContext";
import { UserMode } from "../../domain/User";

/* eslint-disable jsx-a11y/anchor-is-valid */
export const SelectUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [selectActive, setSelect] = useState(false);

  const notSelectedUser = () => {
    return (
      <div className="button is-primary" onClick={() => setSelect(true)}>
        <strong>Selecionar Usuário</strong>
      </div>
    );
  };

  const selectUserStage = () => {
    return (
      <div className="buttons is-centered">
        <div
          className="button is-danger"
          onClick={() => setUser(user.login(UserMode.tatuEsposo))}
        >
          <strong>{UserMode.tatuEsposo}</strong>
        </div>
        <div
          className="button is-danger"
          onClick={() => setUser(user.login(UserMode.tatuMarida))}
        >
          <strong>{UserMode.tatuMarida}</strong>
        </div>
      </div>
    );
  };

  const selectedUser = () => {
    return (
      <div className="buttons is-centered">
        <div className="button is-primary">
          <strong>{user.getActualUser()}</strong>
        </div>
        <div
          className="button is-light"
          onClick={() => {
            setUser(user.logout());
            setSelect(false);
          }}
        >
          <strong>Logout</strong>
        </div>
      </div>
    );
  };

  if (user.getLogged()) {
    return selectedUser();
  }

  if (selectActive) {
    return selectUserStage();
  }

  return notSelectedUser();
};
