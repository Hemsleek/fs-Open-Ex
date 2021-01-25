import React, {useState , useEffect} from 'react'
import Axios from 'axios'

import './App.css';


function App() {
  const [countries , setCountries] = useState([])
  const [filtered , setFiltered] = useState('')

  useEffect(() => {
    Axios('https://restcountries.eu/rest/v2/all')
    .then(({data}) => setCountries(data)) 
    .catch(err => console.log(err))

  },[])

  const countriesToShow = filtered.trim() ? countries.filter(country => country.name.toLowerCase().includes(filtered.toLowerCase())): []
  
  return (
    <div className="App">
     <form>
       <div>
         find countries <input type='text' value={filtered} onChange={(e) => setFiltered(e.target.value)} />

       </div>
     </form>
     <div>
       {
       countriesToShow.map((country,countryIndex) => <p key={`country-index${countryIndex}`}>{country.name}</p>)
       }
     </div>
    </div>
  );
}

export default App;
