import axios from "axios"
const url = "http://localhost:8080/";
export const getAllData = async () => {

    try {
        const data = await axios.get(url);

        return data.data;
    }
    catch (err) {
        console.log("There was an error...", err)
    }

}

export const getSearchedData = async (data) => {

    try {
        const value = await axios.post(url, { value: data });
        return value

    }
    catch (err) {
        console.log("There was an error...", err)
    }

}


export const createuser = async (data) => {
    try {
        const response = await axios.post(`${url}createusers`, data)
        console.log(response.data);
    }
    catch (e) {
        console.log("Error creating user")
    }
}


export const deleteUserApi = async (data) => {
    try {
        const response = await axios.delete(`${url}${data}`);
        return response.data.deletedId;

    }
    catch (e) {
        console.log("Error deleting user")
    }
}

export const updateUserApi = async (data) => {
    console.log(data)
    try {
        const response = await axios.put(`${url}updateusers`, data);
        console.log(response)
    }
    catch (e) {
        console.log("Error updating user")
    }
}

