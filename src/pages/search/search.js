import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from '../../components/movie/movie';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedMovies } from '../../store/actions/searchAction';
import Loader from '../../components/loader/loader';


const Search = () => {

    const movies = useSelector((state) => state.searchedMovies.movies);

    const isLoading = useSelector((state) => state.loading.isLoading);

    const [page, setPage] = useState(1);

    const {search} = useLocation();

    const  qq = React.useMemo   (()=> new URLSearchParams(search),[search]).get('query');

    console.log(qq);

    const [q, setQ] = useState(qq)
    console.log('before',q);
    
    console.log('after',q);
    
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(5000, q);
        
        dispatch(getSearchedMovies(page, q))
        setQ(qq);
    },[page, q])

    useEffect(() => {
        console.log(10);
        setQ(qq)
    },[])

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
                {isLoading? <Loader/> : movies.map((e, index) => (<MovieCard movie={e} key={index} />))}
            </InfiniteScroll>
        </div>
    )
}

export default Search;