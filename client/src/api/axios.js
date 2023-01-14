import axios from "axios";
export const fetchSelectedData = () => {
    return axios
    .get("http://localhost:3000/api/selectedData")
    .then(response => response.data)
    .catch(error => console.log(error))
    
}