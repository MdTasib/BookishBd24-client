import axios from "../../utils/axios";

export const getQuestions = async () => {
	const response = await axios.get("/questions");
	return response.data.data;
};
