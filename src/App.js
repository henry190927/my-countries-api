import React, {useState} from 'react';
import Countries from './Components/Countries'

import './App.css'
import { Input, Button } from 'antd';

// const api_url = 'http://restcountries.eu'

function App() {
  const [searchinput, setSearchInput] = useState("")
  const [ordering, setOrdering] = useState("Sort")
  const [isSelected, setIsSelected] = useState(false)
  const [model, setModel] = useState(null)

  return (
    <div className="App">
      <div className="App-Interface">
        <div className="title">
          <span>Countries Introductions</span>
        </div>

        {!isSelected ? 
          <div className="main">
            <div className="head">
              <div className="search-bar">
                <Input
                  placeholder="Type any country..."
                  value={searchinput}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
              </div>

              <select name="sort" id="sort" className="sort"
                onChange={(event) => {setOrdering(event.target.value)}}
              >
                <option value="Sort">Sort</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>

            <div className="countries">
              <Countries 
                search={searchinput}
                ordering={ordering}
                setIsSelected={setIsSelected}
                setModel={setModel}
              />
            </div>
          </div> : 
          <div className="main">
            <div className="head">
              <div className="back-button">
                <Button
                  onClick={() => {
                    setIsSelected(false)
                    setOrdering("Sort")
                  }}
                >Back</Button>
              </div>
            </div>

            <div className="model">
              <div className="flag">
                <img src={model.flag} alt="No response" /> 
              </div>

              <div className="intro">
                {console.log(model)}
                <span>Name : {model.name}</span>
                <span>Alpha-2 Code : {model.alpha2Code}</span>
                <span>Alpha-3 Code : {model.alpha3Code}</span>
                <span>Native Name : {model.nativeName}</span>
                <span>Calling Codes : {model.callingCodes}</span>
                <span>Alt Spellings : {model.altSpellings.join(', ')}</span>
                <span>Area : {model.area}</span>
                <span>Capital : {model.capital}</span>
                <span>Population : {model.population}</span>
                <span>Region : {model.region}</span>
                <span>Sub-Region : {model.subregion}</span>
              </div>
            </div>
          </div>
          }

      </div>
    </div>
  );
}

export default App;
