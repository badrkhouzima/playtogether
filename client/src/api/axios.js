import axios from "axios";
axios.defaults.baseURL = "https://playtogetherserver.azurewebsites.net/";
//axios.defaults.baseURL = "http://localhost:3000/";


export const fetchSelectedData = () => {
    console.log("entered axios")
  return axios
    .get("/api/selectedData")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

