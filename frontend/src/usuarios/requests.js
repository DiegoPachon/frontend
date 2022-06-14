import axios from "axios";
import URLBackend from "../backendPath";

const delBooks = (id) => {
  return axios
    .delete(`${URLBackend}${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      return res.data;
    });
};

const getBooks = () => {
  return axios
    .get(`${URLBackend}`)
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      return res.data;
    });
};

export { delBooks, getBooks };
