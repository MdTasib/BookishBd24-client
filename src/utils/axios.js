import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:50000",
});

export default axiosInstance;
