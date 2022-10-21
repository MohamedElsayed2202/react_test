
import {axiosInstance} from '../../network/axios-instance';

export const getMovies = (page) => async (dispatch) => {
    try {
        const res = await axiosInstance.get('/movie/popular', {
            params: {
                page: page
            }
        });
        dispatch({
            type: "GET_MOVIES",
            payload: res.data.results
        });
    } catch (e) {
        return console.log(e);
    }
} 