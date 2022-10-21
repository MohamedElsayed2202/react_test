const INITIAL_VALUE = {
    movies: []
}
export default function MoviesReducer(state = INITIAL_VALUE, action){
    let newVal;
    if(JSON.stringify(state.movies) === JSON.stringify(action.payload)){
        newVal = [...state.movies];
    }
    else{
        newVal = [...state.movies.concat(action.payload)];
    }
    switch (action.type) {
        case 'GET_MOVIES':
            return{
                movies: newVal
            }
    
        default:
            return state;
    }
}