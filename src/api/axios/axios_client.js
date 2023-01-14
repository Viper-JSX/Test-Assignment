import axios from "axios";
import { baseURL } from "../api_data";
import { headers } from "../api_data";

const axiosClient = axios.create({ baseURL, headers });

export { axiosClient };