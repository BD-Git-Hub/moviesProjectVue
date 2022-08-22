import { APIKey } from "./APIKeys";

export const getData = async () => {
  let movies = [];
  // await fetch(`https://imdb-api.com/en/API/ComingSoon/${APIKey}`)
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error(`An Error has occurred ${response.status}`);
  //     }
  //   })
  //   .then((data) => {
  //     movies.push(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // return movies;

  await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`An Error has occurred ${response.status}`);
      }
    })
    .then((data) => {
      movies.push(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return movies;


};
