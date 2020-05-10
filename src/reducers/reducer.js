const iState = {
    name: "Fahad",
    wishes: ['eat', 'Sleep']
}


const reducer = (state=iState, action) => {
    if(action.type == 'CHANGE_NAME') {
        return {
            ...state,
            name: action.payload
        }
    }
    else {
        return state;
    }
}

export default reducer;