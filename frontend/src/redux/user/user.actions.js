import userTypes from "./user.types";

// Login
const startLogin = () => ({
  type: userTypes.START_LOGIN,
});

const successLogin = (user) => ({
  type: userTypes.SUCCESS_LOGIN,
  payload: user,
});

const failureLogin = (message) => ({
  type: userTypes.FAILURE_LOGIN,
  payload: message,
});

export const startLoginAsync = (credentials, cb) => {
  return async (dispatch) => {
    dispatch(startLogin());
    await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          dispatch(failureLogin(res.msg));
        } else {
          localStorage.setItem("access_token", res.user.token);
          localStorage.setItem("user", JSON.stringify(res.user));
          dispatch(successLogin(res.user));
          cb();
        }
      });
  };
};

// Register
const startRegister = () => ({
  type: userTypes.START_REGISTER,
});

const successRegister = (user) => ({
  type: userTypes.SUCCESS_REGISTER,
  payload: user,
});

const failureRegister = (message) => ({
  type: userTypes.FAILURE_REGISTER,
  payload: message,
});

export const startRegisterAsync = (credentials, cb) => {
  return async (dispatch) => {
    dispatch(startRegister());
    await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          dispatch(failureRegister(res.msg));
        } else {
          localStorage.setItem("access_token", res.token);
          localStorage.setItem("user", JSON.stringify(res));
          dispatch(successRegister(res));
          cb();
        }
      });
  };
};

// Logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
  dispatch({
    type: userTypes.LOGOUT,
  });
};

// Login
const startUpdate = () => ({
  type: userTypes.PROFILE_UPDATE_START,
});

const successUpdate = (user) => ({
  type: userTypes.PROFILE_UPDATE_SUCCESS,
  payload: user,
});

const failureUpdate = (message) => ({
  type: userTypes.PROFILE_UPDATE_FAILURE,
  payload: message,
});

export const startUpdateProfile = (credentials, cb) => {
  return async (dispatch) => {
    dispatch(startUpdate());
    await fetch("/api/profile/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          dispatch(failureUpdate(res.message));
        } else {
          localStorage.setItem("user", JSON.stringify(res));
          dispatch(successUpdate(res));
          cb();
        }
      });
  };
};
