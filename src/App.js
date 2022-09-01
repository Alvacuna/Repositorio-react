import "./App.css";

import { useEffect, useState } from "react";
import { WorkGrade } from "./components/WorkGrade/WorkGrade";
import { getAllProyectGrades } from "./services/getAllProyectGrades";
import { FormFilter } from "./components/WorkGrade/FormFilter";
import { Link, BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
      <header className="header">
        <div className="header__container">
          <Link className="header__title" to="#">
            <p className="title">REPOSITORIO ACADEMICO DE EL ITPM</p>
          </Link>
          <nav className="nav">
            <Link to="#" className="Nav__a">
              Ayuda
            </Link>

            <Link to="#" className="Nav__a">
              Contacto
            </Link>
            <Link to="#" className="Nav__a">
              Acerca de
            </Link>
          </nav>
        </div>
      </header>
      </BrowserRouter>

      
      <FormFilter handleChange={handleChange} addSearch={addSearch} />
      <ul className="containerGrid">
        {filterGrades.map((proyectGrad) => (
          <WorkGrade {...proyectGrad} key={proyectGrad.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
