import React, {useState, useEffect} from 'react'

import '../App.css'

const api_url = 'https://restcountries.eu/rest/v2/all'

const Countries = ({ search, ordering, setIsSelected, setModel }) => {
  // a list of countries currently
  const [countries, setCountries] = useState([])

  const fetchCountryData = async (ordering) => {
    const response = await fetch(api_url)
    const countries = await response.json()

    if (ordering === "A-Z") {
      setCountries(countries.sort())
    } else if (ordering === "Z-A") {
      setCountries(countries.reverse())
    } else {
      setCountries(countries.sort(() => Math.random() - 0.5)) 
    }
  }

  useEffect(() => {
    fetchCountryData(ordering)
  }, [ordering])

  return (
    <div>
      {countries.map((country, index ) => {
        const { flag, name, alpha2Code, alpha3Code, nativeName, altSpellings, callingCodes} = country

        if (name.includes(search)) {
          return (
            <div className="country" key={index}
              onClick={() => {
                setIsSelected(true)
                setModel(country)
              }}
            >
              <img src={flag} alt="No response"/>
              <span className="name">{name}</span>
              <div className="content">
                <span>Alpha-2 Code : {alpha2Code}</span>
                <span>Alpha-3 Code : {alpha3Code}</span>
                <span>Native Name : {nativeName}</span>
                <span>Calling Codes : {callingCodes}</span>
                <span style={{height: '35px'}}>Alt Spellings : {altSpellings.join(', ')}</span>
              </div>
            </div>
        )} else {return null}
      })}
    </div>
  )
}


export default Countries;
