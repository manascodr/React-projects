import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";

export const asynccurrentuser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      dispatch(loaduser(user));
    }else{
        console.log("User not found");
    }
  } catch (error) {}
};
export const asynclogoutuser = (user) => async (dispatch, getState) => {
  try {
    localStorage.setItem("user", null);
  } catch (error) {}
};
export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {}
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {}
};
