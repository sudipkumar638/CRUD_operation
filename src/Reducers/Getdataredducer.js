const initialState = [
    {
        data: [],
        count: 0,
        search: []
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

    else {
        return state;
    }
}

export default Getdataredducer;