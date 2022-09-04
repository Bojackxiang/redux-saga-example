import axios from "axios";

// get user request from axios and dispatch to reducer

export function getUserRequest() {
  return axios.get("http://jsonplaceholder.typicode.com/users/1");
}
