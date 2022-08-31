export const WorkGrade = ({ title, autor, gestion, carrera }) => {
  return (

        <li className="gridProyect">
          <h3>{title}</h3>
          <p>{autor}</p>
          <p>{gestion}</p>
          <p>{carrera} 1</p>
        </li>
        )
};
