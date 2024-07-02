import Axios from "axios";

const API_BASE_URL: string = "https://api.omens.com.br/react-test";
const axiosFilmsInstance = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosFilmsInstance;
