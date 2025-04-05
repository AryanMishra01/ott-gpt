import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //(early return) if movies are null the below code would not run by using this if statement.
  if(movies ==null) return;
  // or if(!movies) return;

  //first movie as main movie.
  const mainMovie = movies[0];
  //console.log(mainMovie)

  const {original_title, overview, id} = mainMovie
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
