import { UserPath } from "shared/enum";

export const USER_NAMES: { [key in UserPath]: string } = {
  [UserPath.Default]: "Дорогие гости!",
  [UserPath.User1]: "Пользователь 1",
  [UserPath.User2]: "Пользователь 2",
};

export const USER_PATH_OPTIONS: UserPath[] = [
  UserPath.Default,
  UserPath.User1,
  UserPath.User2,
];
