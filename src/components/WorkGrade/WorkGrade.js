import "./WorkGrade.css"

export const WorkGrade = ({ title, autor, gestion, carrera, portada }) => {
  return (

        <li className="gridProyect">
          <img alt={"Portada"}  src={portada} className="gridProyect__img"></img>
          <h3 className="gridProyect__title">{title}</h3>
          <p className="gridProyect__autor">{autor}</p>
          <p className="gridProyect__gestion">{gestion}</p>
          <p className="gridProyect__carrera">{carrera}</p>
        </li>
        )
};
