import "./App.css";

import { useEffect, useState } from "react";
import { WorkGrade } from "./components/WorkGrade/WorkGrade";
import { getAllProyectGrades } from "./services/getAllProyectGrades";
import { FormFilter } from "./components/WorkGrade/FormFilter";

const App = () => {
  const [proyectGrade, setProyectGrade] = useState([]);
  const [filterProyect, setFilterProyect] = useState("");
  const [buttonSearch, setButtonSearch] = useState();

  useEffect(() => {
    getAllProyectGrades().then((response) => {
      setProyectGrade(response);
    });
  }, []);

  const handleChange = (event) => {
    setFilterProyect(event.target.value);
  };

  const addSearch = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const filterGrades = proyectGrade.filter((proyect) => {
    return (
      proyect.title.toLowerCase().includes(filterProyect.toLowerCase()) ||
      proyect.autor.toLowerCase().includes(filterProyect.toLowerCase())
    );
  });
  return (
    <div className="container">
      <FormFilter handleChange={handleChange} addSearch={addSearch}/>
      <ul className="containerGrid">
        {filterGrades.map((proyectGrad) => (
          <WorkGrade {...proyectGrad} key={proyectGrad.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
