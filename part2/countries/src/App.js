import React, {useState , useEffect} from 'react'
import Axios from 'axios'

import './App.css';

const OneCountry = ({country,weather , setWeather}) => {
  const {name, population, languages, flag, capital } = country[0] 
  const weatherApiKey = process.env.REACT_APP_API_KEY
  console.log({weather})
  const api= `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${capital}`

  useEffect(()=> {
       Axios(api).then(({data})=> setWeather(data.current)).catch(err => (err)) 
  },[api,setWeather])

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
      <h2>Weather in {capital}</h2>
      <p>Temperature : { weather.temperature} Celcius</p>
      <img src={weather.weather_icons} alt="weather-icon"/>
      <p>Wind :{weather.wind_degree} mph direction {weather.wind_dir}</p> 
    </div>
  )
}

const CountriesToDisplay = ({filtered , countries ,weather, displayCountry, setDisplayCountry , setWeather}) => {
  const countriesToShow = filtered.trim() ? countries.filter(country => country.name.toLowerCase().includes(filtered.toLowerCase())): []
  const countriesLength = countriesToShow.length
  return(
    <div>
      { !displayCountry.length?
        (
          countriesLength===1? <OneCountry country={countriesToShow} weather = {weather} setWeather = {setWeather} /> : 
          countriesLength <10 ? countriesToShow.map((country,countryIndex) => 
          <div style={{display:'flex',alignItems:'center'}} key={`country-index${countryIndex}`}>
          <p >{country.name}</p> 
          <button onClick={() => setDisplayCountry([country])}>show</button> 
          </div>) :
          <p>Too Many matches,specify another filter</p>
        ) :
        <OneCountry country ={displayCountry} weather = {weather} setWeather = {setWeather} />
      }
    </div>
  ) 
}
function App() {
  const [countries , setCountries] = useState([])
  const [filtered , setFiltered] = useState('')
  const [displayCountry , setDisplayCountry] = useState([])
  const [weather , setWeather] =useState([])

  useEffect(() => {
    Axios('https://restcountries.eu/rest/v2/all')
    .then(({data}) => setCountries(data)) 
    .catch(err => console.log(err))

  },[])
  const handleInputChange = (e) => {
    if(displayCountry.length)setDisplayCountry([])
    setFiltered(e.target.value)
  }
  return (
    <div className="App">
     <form>
       <div>
         find countries <input type='text' value={filtered} onChange={(e) => handleInputChange(e)} />

       </div>
     </form>
     <CountriesToDisplay filtered={filtered} countries={countries} displayCountry = {displayCountry} setDisplayCountry = {setDisplayCountry}  weather={weather} setWeather = {setWeather} />
    </div>
  );
}

export default App;
