import axios from "axios";

const instance = axios.create({
  baseURL: "https://reststop.randomhouse.com",
});

export default instance;
