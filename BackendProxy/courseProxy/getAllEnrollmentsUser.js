import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL + '/course';

// Function to fetch enrollment data for a specific user and course
const getAllEnrollmentsUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-user-enrollments`, {
      params: {
        userId,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch enrollment data:', error);
    throw error;
  }
};

export default getAllEnrollmentsUser; 