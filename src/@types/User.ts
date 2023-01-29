export enum UserMode {
  initial = "",
  tatuMarida = "Tatu Marida",
  tatuEsposo = "Tatu Esposo",
}

export interface User {
  getLogged(): Boolean;
  getActualUser(): UserMode;
  login(user: UserMode): User;
  logout(): User;
}

export class UserDefault implements User {
  private logged: Boolean;
  private actualUser: UserMode;

  public constructor(logged: Boolean, actual: UserMode) {
    this.logged = logged;
    this.actualUser = actual;
  }

  public static init(): User {
    return new UserDefault(false, UserMode.initial);
  }

  public getLogged() {
    return this.logged;
  }

  public getActualUser(): UserMode {
    return this.actualUser;
  }

  public login(user: UserMode): User {
    return new UserDefault(true, user);
  }

  public logout(): User {
    return UserDefault.init();
  }
}
