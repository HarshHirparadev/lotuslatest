import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL +'/course';

// Updated function to complete a lesson for the specific enrollment
const completeLesson = async (enrollmentId, courseId, lessonId) => {
  try {
    const res = await axios.post(`${BASE_URL}/complete-lesson`, { enrollmentId, courseId, lessonId });
    return res.data;
  } catch (error) {
    console.error('Error completing lesson:', error);
    throw error;
  }
};

export default completeLesson;