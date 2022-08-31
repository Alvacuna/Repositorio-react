import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";




const App = () => {
  const [proyectGrade, setProyectGrade] = useState([])
  const [filterProyect, setFilterProyect] = useState("")
  const [buttonSearch, setButtonSearch] = useState()

  const hookServ = () => {
    axios
    .get('http://localhost:3001/proyecto-grado')
    .then(response => {
      setProyectGrade(response.data)
    })
  }

  useEffect(hookServ, [])


  const handleChange = (event) => {
    setFilterProyect(event.target.value)
  }

  const addSearch = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  const filterGrades = proyectGrade.filter((proyect) => {
    return proyect.title.toLowerCase().includes(filterProyect.toLowerCase()) || proyect.autor.toLowerCase().includes(filterProyect.toLowerCase())
  })
  return(
    <div className="container">
      <form className="formBusc" onSubmit={addSearch}>
        <input className="formBusc__input" onChange={handleChange}/>
        <button className="formBusc__button" type="submit">Buscar</button> 
      </form>
      <ul className="containerGrid">
          {
            filterGrades.map(proyectGrad => {
              return (
              <li key={proyectGrad.id} className="gridProyect">
                <h3>{proyectGrad.title}</h3>
                <p>{proyectGrad.autor}</p>
                <p>{proyectGrad.gestion}</p>
                <p>{proyectGrad.carrera}</p>
              </li>
              )
            })
          }
        </ul>
    </div>
  )
  
}

export default App;
