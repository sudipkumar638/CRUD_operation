const initialState = [
    {
        data: [],
        count: 0,
        search: [],
        deletedcount: 0
    }
]

const Getdataredducer = (state = initialState, action) => {


    if (action.type == 'GET_DATA') {

        return {
            ...state,
            data: action.payload.data,
            count: action.payload.data.length
        }
    }

    else if (action.type == "CREATE_USER_DATA") {
        return {
            ...state,
            data: [...state.data, action.payload.data]
        }
    }

    else if (action.type == 'DELETE_USER_DATA') {

        console.log(action.payload.data)
        return {
            ...state,
            deletedcount: action.payload.data
        }
    }

    else {
        return state;
    }
}

export default Getdataredducer;