export const IMG_PATH = 'https://image.tmdb.org/t/p/w300';
export const API_MOVIES = 'https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
export const API_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US';
export const API_MOVIE = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`;
