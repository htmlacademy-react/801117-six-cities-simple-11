import { UserData } from '../types/user-data';

const AUTH_USER_KEY_NAME = 'six-cities-user';

export const getUser = (): UserData | null => {
  const user = localStorage.getItem(AUTH_USER_KEY_NAME);

  if (user) {
    return JSON.parse(user) as UserData;
  }

  return null;
};

export const saveUser = (user: UserData): void => {
  localStorage.setItem(AUTH_USER_KEY_NAME, JSON.stringify(user));
};

export const dropUser = (): void => {
  localStorage.removeItem(AUTH_USER_KEY_NAME);
};
