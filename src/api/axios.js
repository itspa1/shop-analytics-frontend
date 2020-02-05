import axios from "axios";
import { baseUrl } from "../configs/env";

export default axios.create({
  baseURL: baseUrl
});
