import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './details.css'
const Details = () => {

    const params = useParams();

    const [movieDetails, setMovieDetails] = useState({});
    const [year, setYear] = useState('');

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}`,{
            params:{
                api_key: "18ebb55ec02cf2ed6553ddd53661fc5f"
            }
        })
        .then(result => {
            setMovieDetails(result.data)
            // console.log(result.data.release_date.split("-")[0]);
            setYear(result.data.release_date.split("-")[0]);
            console.log(year);
        })
        .catch(e => console.log(e))
    },[])
    return(
        <div className={"container-fluid"}>
        <div className={"row justify-content-center align-items-center mt-5 h-100"}>
            <div className={"back-image"}style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieDetails.backdrop_path})`}}>
                <div className={"mask d-flex justify-content-center align-items-center"}>
                    <div className={"p-5 d-flex flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column align-items-center"}>
                        <img className="poster-img"src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}/>
                        <div className={"ps-5"}>
                            <h2 className="text-white">{movieDetails.title}<span className="text-secondary"> ({year})</span></h2>
                            <p className="text-white fs-4"><i>{movieDetails.tagline}</i></p>
                            <p className="text-white fs-5">{movieDetails.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )   
}

export default Details