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


