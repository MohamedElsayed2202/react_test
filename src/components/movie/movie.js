import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToFav } from '../../store/actions/favoritAction';
import { useHistory } from 'react-router-dom';

const MovieCard = props => {

    const favs = useSelector((state) => state.favorit.favs);

    const dispatch = useDispatch();

    const history = useHistory();
    const add = (e) => {
        e.stopPropagation();
        dispatch(addToFav(props.movie))
    }
    return (
        <div className='card-view' onClick={() => {
            history.push(`/details/${props.movie.id}`)
        }}>
            <div className={"favbtn"} onClick={(e) => add(e)}>
                {favs.includes(props.movie) ? <i className={"fa-solid fa-heart text-danger fs-2"}></i> : <i className={"fa-regular fa-heart text-danger fs-2"}></i>}
            </div>
            <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} style={{ width: '100%' }} />
            <div className='card-title mt-3 mx-3'>
                <p><strong>{props.movie.title}</strong></p >
                <p><span className='rating'>{props.movie.vote_average}</span>/10</p>
            </div>
            <div className='card-title subtitle mx-3'>
                <p className='text-secondary'>PUPLISH YEAR</p >
                <p className='text-secondary'>PLAYING HOURS</p>
            </div>
            <div className='card-title subtitle mx-3'>
                <p >{props.movie.release_date}</p >
                <p >{props.hours}</p>
            </div>
        </div>
    );
}

export default MovieCard;