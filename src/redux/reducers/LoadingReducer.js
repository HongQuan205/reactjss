
const initialState = {
    isLoading: false
}

const LoadingReducer=(state = initialState, actions) => {
    switch (actions.type) {
        case "DISPLAY":
            state.isLoading = true;
            return { ...state }
        case "HIDE": {
            state.isLoading = false;
            return { ...state }
        }

        default:
            return state
    }
}
export default  LoadingReducer;