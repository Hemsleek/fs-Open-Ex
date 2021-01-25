import React, {useState , useEffect} from 'react'
import Axios from 'axios'

import './App.css';


function App() {
  const [countries , setCountries] = useState([])

  useEffect(() => {
    Axios('https://restcountries.eu/rest/v2/all')
    .then(({data}) => setCountries(data)) 
    .catch(err => console.log(err))

  },[])
  return (
    <div className="App">
     <form>
       <div>
         find countries <input type='text' />
       </div>
     </form>
     <div>
       {
       countries.map((country,countryIndex) => <p key={`country-index${countryIndex}`}>{country.name}</p>)
       }
     </div>
    </div>
  );
}

export default App;
