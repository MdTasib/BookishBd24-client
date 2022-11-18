import axios from "../../utils/axios";

export const getSliders = async () => {
	const response = await axios.get("/slider");
	return response.data.data;
};
