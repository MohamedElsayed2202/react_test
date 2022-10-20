import { useSelector } from 'react-redux'
import MovieCard from '../../components/movie/movie';

const Favorites = props => {

    const favs = useSelector((state) => state.favorit.favs);
    return (
        <div className="container-fluid">
            <div className="row justify-content-evenly gap-3 mt-3">
                {favs.map((el, index) => (<MovieCard movie={el} key={index}/>))}
            </div>
        </div>
    );
}

export default Favorites;