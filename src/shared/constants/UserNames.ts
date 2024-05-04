import { UserPath } from "shared/enum";

export const USER_NAMES: { [key in UserPath]: string } = {
  [UserPath.Default]: "Дорогие гости!",
  [UserPath.user1]: "Пользователь 1",
  [UserPath.user2]: "Пользователь 2",
};
