export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";
export const img_original = "https://image.tmdb.org/t/p/original";
export const baseUrl = "https://api.themoviedb.org/3";
export const apiKey = "205cebadb659f10935a047f6a32e5daa";
export const no_300 = "https://www.movienewz.com/img/films/poster-holder.jpg";
export const landscape =
  "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

export const trendingMovies = ` ${baseUrl}/trending/movie/day?api_key=${apiKey}`;
export const topRatedMovies = `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

export const trendingTv = `${baseUrl}/trending/tv/day?api_key=${apiKey}`;
export const topRatedTv = `${baseUrl}/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`;

export const movies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`;
export const tvshow = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=`;

export const movieGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
