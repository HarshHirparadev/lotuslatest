import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL + '/admin';

const getTeachers = async (code) => {
  try {
    const response = await axios.post(`${BASE_URL}/get-teachers`, {code});
      console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getTeachers;
