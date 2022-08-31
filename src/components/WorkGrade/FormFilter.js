export const FormFilter = ({addSearch, handleChange}) => {
    return (
        <form className="formBusc" onSubmit={addSearch}>
        <input className="formBusc__input" onChange={handleChange} />
        <button className="formBusc__button" type="submit">
          Buscar
        </button>
      </form>
    )
}