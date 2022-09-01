import "./FormFilter.css"

export const FormFilter = ({addSearch}) => {
    return (
        <form className="formBusc" onSubmit={addSearch}>
        <input className="formBusc__input" name="search" autoComplete="off"/>
        <button className="formBusc__button" type="submit">
          Buscar
        </button>
      </form>
    )
}