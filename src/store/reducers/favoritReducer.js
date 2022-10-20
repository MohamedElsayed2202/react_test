const INITIAL_VALUE = {
    favs: []
}

export default function favoritReducer(state=INITIAL_VALUE, action){
    let newVal
    if(action.payload !== undefined){
        if(state.favs.includes(action.payload)){
            newVal = state.favs.filter(el => el.id !== action.payload.id);
        }
        else{
            newVal = [...state.favs];
            newVal.push(action.payload);
        }
    }
    switch (action.type) {
        case "ADD_TO_FAV":
                return{
                    favs: newVal
                }
        default:
            return state;
    }
}