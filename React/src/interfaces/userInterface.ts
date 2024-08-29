export type registerType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  iAgree: boolean;
};

export type loginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
