import axios from "axios";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
  baseURL: staticServerUrl + "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response; // 성공적인 응답은 그대로 반환
  },
  (error) => {
    // 여기서 에러 처리를 수행
    if (error.response) {
      // 서버 응답이 왔으나 에러 상태 코드인 경우
      console.error("Error response:", error.response);
    } else if (error.request) {
      // 요청을 보냈으나 응답을 받지 못한 경우
      console.error("No response from server:", error.request);
    } else {
      // 요청을 보내기 전에 발생한 에러
      console.error("Request error:", error.message);
    }
    return Promise.reject(error); // Promise를 사용하여 에러를 다시 전달
  }
);
