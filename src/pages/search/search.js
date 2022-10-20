import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import MovieCard from '../../components/movie/movie';
const Search = props => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const {search} = useLocation();
    const searchParams = React.useMemo(()=> new URLSearchParams(search),[search])
    console.log(searchParams.get('query'));
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "18ebb55ec02cf2ed6553ddd53661fc5f",
                query: searchParams.get('query'),
                page: page
            }
        })
            .then((result) => setMovies(movies.concat(result.data.results)))
            .catch((e) => console.log(e))
    },[page])

    const nextPage = () => {
        let current = page;
        let next = current + 1;
        setPage(next);
    }


    return(
        <div className="container-fluid">
            <InfiniteScroll
                dataLength={movies.length}
                next={nextPage}
                className={"row justify-content-evenly gap-3 mt-3"}
                hasMore={true}
            >
                {movies.map((e, index) => (<MovieCard movie={e} key={index} />))}

            </InfiniteScroll>
        </div>
    )
}

export default Search;