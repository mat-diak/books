import axios from "axios";

const instance = axios.create({
  baseURL: "https://reststop.randomhouse.com",
});

instance.defaults.headers.get["Content-Type"] = "application.json";
instance.defaults.headers.get["content-type"] = "application.json";
instance.defaults.headers.get["Content-type"] = "application.json";

instance.defaults.headers.common = {
  Accept: "application/json",
};

export default instance;
