import axios from "axios";

const URL = "http://localhost:3000"

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

    }
}