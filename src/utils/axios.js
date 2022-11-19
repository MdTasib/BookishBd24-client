import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://beatnik-task-server.vercel.app",
});

export default axiosInstance;
