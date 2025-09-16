import axios from "axios";
const api = axios.create({
  baseURL: "https://api.school-os.net/jelly/",
  // baseURL: 'http://localhost:3095/jelly/',
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 1e4
});
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API 통신 오류:", error.response || error.message);
    return Promise.reject(error);
  }
);
const apiPost = (endpoint, data) => {
  return api.post(endpoint, data);
};
const apiPoint = async () => {
  var _a;
  const res = await apiPost("bank.php", {
    mode: "getPoint",
    idnt_code: sessionStorage.getItem("idnt_code")
  });
  return Number((_a = res.data) == null ? void 0 : _a.mb_point) || 0;
};
export {
  apiPost as a,
  apiPoint as b
};
//# sourceMappingURL=api-D3jlul4Q.js.map
