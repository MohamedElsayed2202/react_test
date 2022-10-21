import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/movie/movie";
import { getMovies } from "../../store/actions/moviesAction";
import Loader from "../../components/loader/loader";
const Home = props => {

    const favs = useSelector((state) => state.favorit.favs);
    const isLoading = useSelector((state) => state.loading.isLoading);


    console.log('hi',favs);

    const movies = useSelector((state) => state.movies.movies);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies(page))
    },[page])



    const nextPage = () => {
        let current = page;
        let next = current + 1;
        setPage(next);
    }

    return (
        <div className="container-fluid">
            <InfiniteScroll
                dataLength={movies.length}
                next={nextPage}
                className={"row justify-content-evenly gap-3 mt-3"}
                hasMore={true}
            >
                {isLoading? <Loader/> : movies.map((e, index) => (<MovieCard movie={e} key={index} />))}
              
            </InfiniteScroll>
        </div>
    );
}

export default Home