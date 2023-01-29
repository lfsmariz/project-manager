import { UserContextProvider } from "./User/UserContext";

export const ContextProvider = (props: any) => {
  const { children } = props;
  return <UserContextProvider>{children}</UserContextProvider>;
};
