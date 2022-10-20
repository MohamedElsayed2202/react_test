import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movie/movie";

const Home = props => {

    const favs = useSelector((state) => state.favorit.favs);

console.log('hi',favs);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
                api_key: "18ebb55ec02cf2ed6553ddd53661fc5f",
                page: page
            }
        })
            .then((response) => {
                setMovies(movies.concat(response.data.results));
            })
            .catch((e) => console.log(e))
    }, [page]);



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
                {movies.map((e, index) => (<MovieCard movie={e} key={index} />))}

            </InfiniteScroll>
        </div>
    );
}

export default Home