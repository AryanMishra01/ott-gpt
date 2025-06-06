import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo)

  //fetch trailer video && updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // if filter data length =0, then take first video from filter data else load the first trailer.
    const trailer = filterData.length === 0 ? filterData[0] : json.results[0];
   //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
   !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
