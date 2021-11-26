import { Chip } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import axios from "axios";
export default function Genre({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setpage
}) {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setpage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    console.log([...genres, genre]);
    setpage(1);
  };
  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US`
    );
    setGenres(data.genres);
    // console.log(data.genres);
  };
  useEffect(() => {
    fetchGenre();
    return () => {
      setGenres({});
    };
  }, []);
  return (
    <div>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
}
