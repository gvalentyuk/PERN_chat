import userTypes from "./user.types";

const INITIAL_STATE = {
    // user: JSON.parse(localStorage.getItem('user')) || null,
    // token: localStorage.getItem('access_token') || '',
    // isLoading: false,
    // isLogged: !!JSON.parse(localStorage.getItem('user')),
    // error: null,
    user: {},
    token: '',
    isLoading: false,
    isLogged: false,
    error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.START_LOGIN:
        case userTypes.START_REGISTER:
        case userTypes.PROFILE_UPDATE_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case userTypes.FAILURE_LOGIN:
        case userTypes.FAILURE_REGISTER:
        case userTypes.PROFILE_UPDATE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        case userTypes.SUCCESS_LOGIN:
        case userTypes.SUCCESS_REGISTER:
        case userTypes.PROFILE_UPDATE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                user: action.payload,
                token: action.payload.token,
                error: null,
            };
        }
        case userTypes.LOGOUT: {
            return {
                isLogged: false,
                user: null,
                token: null
            }
        }
        default:
            return state;
    }
};

export default userReducer;
