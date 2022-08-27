import { APIKey } from "./APIKeys";

export const getData = async (APIURL) => {
  let movies = [];

  // console.log(`${APIURL}${APIKey}`)
  
  await fetch(`${APIURL}${APIKey}`)
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

export const searchData = async (APIURL, userParams) => {
  let movies = [];

  // console.log(`${APIURL}${APIKey}${userParams}`)
  
  await fetch(`${APIURL}${APIKey}${userParams}`)
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

}
