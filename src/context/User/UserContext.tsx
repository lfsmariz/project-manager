import { createContext, useState } from "react";
import { User, UserDefault } from "../../domain/User";

type propUserContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const initialContext = {
  user: UserDefault.init(),
  setUser: () => {},
};

export const UserContext = createContext<propUserContext>(initialContext);

export const UserContextProvider = (props: any) => {
  const { children } = props;

  const [user, setUser] = useState(initialContext.user);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
