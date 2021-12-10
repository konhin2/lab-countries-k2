import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const CountriesList = (props) => {
  // Es un arreglo de objetos
  const { allCountries } = props;
  // El .map sirve para recorrer un arreglo y te duvuelve uno nuevo con el mismo largo que el orginal, tu puedes modificar los datos que quieres mostrar
  // Mensaje del input guardado en un estado local
  const [searchValue, setSerchValue] = useState('')
  // Funcion para detectar cambios en el input
  function handleChange(event){
    event.preventDefault()
    setSerchValue(event.target.value)
  }
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <input onChange={(e) => handleChange(e)} className="form-control me-2" type="search" placeholder="Search" ariaLabel="Search" />
          <div className="list-group">
            {allCountries.filter(elementoF => {
              if(searchValue === ''){
                return elementoF
              } else if(elementoF.name.common.toLowerCase().includes(searchValue.toLowerCase())){
                return elementoF
              } return null
            }).map((elemento, i) => {
              return (
                <Link
                  key={i}
                  className="list-group-item list-group-item-action"
                  to={`/countries/${elemento.cca3}`}
                >
                  {`${elemento.flag} ${elemento.name.common}`}
                </Link>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CountriesList;
