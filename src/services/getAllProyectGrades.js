import axios from "axios";

export const getAllProyectGrades = () => {
  return axios.get("http://localhost:3001/proyecto-grado").then((response) => {
    const { data } = response;
    return data;
  });
};
