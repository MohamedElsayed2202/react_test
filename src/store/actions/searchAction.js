import {axiosInstance} from '../../network/axios-instance'


export const getSearchedMovies = (page, q) => async (dispatch) => {
    try {
        const res = await axiosInstance.get('search/movie',{
            params:{
                page: page,
                query: q
            }
        });
        dispatch({
            type:'GET_SEARCHED_MOVIES',
            payload: res.data.results
        });
    } catch (e) {
        return console.log(e);
    }
}