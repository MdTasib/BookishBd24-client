import axios from "../../utils/axios";

export const getRates = async () => {
	const response = await axios.get("/rates");
	return response.data.data;
};
