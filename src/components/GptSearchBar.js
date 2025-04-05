import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
//import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import geminiModel from "../utils/geminiAI";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log('searchMovieTMDB',json.results)
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //make an api call to GPT API and get Movie results
    try {
      const geminiQuery =
        "Act as Movie Recommendation system and suggest some movies for the query" +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koe Mil Gaya";

      const geminiResults = await geminiModel.generateContent(geminiQuery);

      // if (!geminiResults.choices) {
      // write error handling
      // }
     // console.log("geminiAPIResults", geminiResults);
      const geminiResult = geminiResults.response;
      // Movie1, Movie2, Movie3, Movie4
      const gptMovies =
        geminiResult.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
      // [Movie1, Movie2, Movie3, Movie4]
      // console.log(
      //   "gptMovies",
      //   geminiResult.candidates?.[0]?.content?.parts?.[0]?.text.split(",")
      // );
      // for each movie, search TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]
      //console.log("promiseArray", promiseArray);
      const tmdbResults = await Promise.all(promiseArray);
      //console.log("tmdbSearchResult", tmdbResults);

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (err) {
      console.log("Please try again in 20s");
      alert("Please try again in 20s.");
    }
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[langKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
