const INITIAL_VALUE = {
    isLoading: true
}

export default function LoaderReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'SET_LOADER':
            return {
                isLoading: action.payload
            }
    
        default:
            return state;
    }
}