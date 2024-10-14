import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 100000,
    headers: {
        "Content-Type": 'application/json'
    }
})

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
)

export default apiClient