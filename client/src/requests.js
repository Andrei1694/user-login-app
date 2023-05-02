import axios from "axios";

const URL = "http://localhost:4000/v1"

export async function registerUser(email, password, name) {
    try {
        const response = await axios.post(`${URL}/users`, {
            email,
            password,
            name,
        });
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function loginRequest(email, password) {
    try {
        const response = await axios.post(`${URL}/users/login`, {
            email,
            password,
        });

        return response.data

    } catch (error) {
        console.log(error)
    }

}

export async function getMyProfileRequest(token) {
    try {
        const response = await axios.get(`${URL}/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function getCurrentWeatherRequest() {
    try {
        const response = await axios.get(`${URL}/weather`)
        return response.data

    } catch (error) {
        console.log(error)
    }
}