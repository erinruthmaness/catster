import axios from "axios";

//exports object of photos from TheCatAPI

export default {
  getRandomCat: function() {
    return axios.get("https://api.thecatapi.com/v1/images/search");
  },
  getCatsOfBreed: function(breed) {
    return axios.get("https://api.thecatapi.com/images/search?breed_id=" + breed);
  },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
