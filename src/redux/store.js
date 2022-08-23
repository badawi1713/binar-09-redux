import { createStore, combineReducers } from "redux";
const authState = {
  auth: {
    isAuth: false,
  },
};

const profileState = {
  profile: {
    name: "Dzaky Badawi",
    avatar:
      "https://pbs.twimg.com/profile_images/1548892350029516801/zdBqralu_400x400.jpg",
  },
};

// fungsi/reducer memasukan state ke dalam reducer
const authReducer = (state = authState) => {
  return state;
};

const profileReducer = (state = profileState) => {
  return state;
};

const store = createStore(combineReducers({authReducer, profileReducer}));

export default store;
