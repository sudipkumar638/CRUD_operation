export function getData(data) {
    return {
        type: "GET_DATA",
        payload: {
            data: data
        }
    }
}

export function createUserData(data) {
    return {
        type: "CREATE_USER_DATA",
        payload: {
            data: data
        }
    }
}
export function deleteUserData(data) {

    return {
        type: "DELETE_USER_DATA",
        payload: {
            data: data
        }
    }
}

