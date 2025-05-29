// /common/api.js
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.school-os.net/',
    // baseURL: 'http://localhost:3095/jelly/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

// 요청 인터셉터
api.interceptors.request.use(
    config => {
        // 예: 인증 토큰 추가
        const token = sessionStorage.getItem('auth_token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

// 응답 인터셉터
api.interceptors.response.use(
    response => response.data,
    error => {
        console.error('API 통신 오류:', error.response || error.message)
        return Promise.reject(error)
    }
)

// POST 요청 함수
export const apiPost = (endpoint, data) => {
    return api.post(endpoint, data)
}

// GET 요청 함수
export const apiGet = (endpoint, params) => {
    return api.get(endpoint, { params })
}

export const apiPoint = async () => {
    const res = await apiPost('bank.php', {
        mode: 'getPoint',
        idnt_code: sessionStorage.getItem('idnt_code')
    })

    return Number(res.data?.mb_point) || 0
}

export default api