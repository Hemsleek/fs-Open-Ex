import React, {useState , useEffect} from 'react'
import Axios from 'axios'

import './App.css';

const OneCountry = ({country}) => {
  const {name, population, languages, flag, capital } = country[0] 
  return(
    <div>
      <h2>{ name }</h2>
      <p>Capital - { capital }</p>
      <p>Population - { population }</p>
      <h2>Languages</h2>
      <ul>
        {
          languages.map((language , languageIndex) => <li key={`language-number${languageIndex}`}>{language.name}</li>)
        }
      </ul>
      <img src={flag} alt={`${name}-flag`} style={{width:'30rem'}}/>
    </div>
  )
}

const CountriesToDisplay = ({filtered , countries}) => {
  const countriesToShow = filtered.trim() ? countries.filter(country => country.name.toLowerCase().includes(filtered.toLowerCase())): []
  const countriesLength = countriesToShow.length
  return(
    <div>
      {
        countriesLength===1? <OneCountry country={countriesToShow} /> : 
        countriesLength <10 ? countriesToShow.map((country,countryIndex) => <p key={`country-index${countryIndex}`}>{country.name}</p>) : 
        <p>Too Many matches,specify another filter</p>
      }
    </div>
  ) 
}
function App() {
  const [countries , setCountries] = useState([])
  const [filtered , setFiltered] = useState('')

  useEffect(() => {
    Axios('https://restcountries.eu/rest/v2/all')
    .then(({data}) => setCountries(data)) 
    .catch(err => console.log(err))

  },[])

 

  return (
    <div className="App">
     <form>
       <div>
         find countries <input type='text' value={filtered} onChange={(e) => setFiltered(e.target.value)} />

       </div>
     </form>
     <CountriesToDisplay filtered={filtered} countries={countries} />
    </div>
  );
}

export default App;
