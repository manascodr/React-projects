import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../App.css";

function SearchBar({ movies, setmovies }) {
  const { register, handleSubmit, reset } = useForm();

  const fetchData = async (q) => {
    // Ignore empty/undefined queries to avoid calling the API with q=undefined
    if (!q || String(q).trim() === "") {
      return;
    }
    try {
      const response = await axios.get(
        `https://imdb.iamidiotareyoutoo.com/search?q=${q}`
      );
      const data = response.data;
      //   console.log(data.description);
      //   console.log("setting movies:", data.description);
      setmovies(data.description);
    } catch (error) {
      console.error("Error fetching data:", error);
      setmovies([]);
    }
  };

  useEffect(() => {
    fetchData("Spiderman");
  }, []);

  // Log after movies state actually updates
  //   useEffect(() => {
  //     console.log(movies);
  //   }, [movies]);

  const onSubmit = (data) => {
    console.log(data);
    fetchData(data.search);
    reset();
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="search-input"
          {...register("search")}
          type="text"
          placeholder="Search movies..."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
