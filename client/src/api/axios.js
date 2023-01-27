import axios from "axios";
axios.defaults.baseURL = "https://playgroundserverdata.azurewebsites.net/";


export const fetchSelectedData = () => {
    console.log("entered axios")
  return axios
    .get("/api/selectedData")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

