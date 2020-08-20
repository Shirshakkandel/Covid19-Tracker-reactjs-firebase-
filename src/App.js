import React, {useState, useEffect} from 'react';

import './App.css';
import { MenuItem,FormControl, Select,} from "@material-ui/core";

//State = How to write variable in React <<<<<<
//https://disease.sh/v3/covid-19/countries
function App() {
    const [countries,setCountries] = useState([])
  
  //UseEffect= Run piece of code based on given condition
    useEffect(()=>{
      //asyc->send a request, wait for it, do something with info
      const getCountriesData = async() => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response)=> response.json())
        .then((data)=> {
          const countries = data.map((country)=> (
           {
             //assign name of country in name 
            name:country.country, // United State, United kingdom
            value:country.countryInfo.iso2//UK, USA, FR

           }));
            
           setCountries(countries)

        })
      }
       getCountriesData();
    },[]);
    return (
    <div className="app">
      <div className="app_header">
      <h1>COvid-19 Tracker</h1>
    
  
  <FormControl className="app_dropdown">
  <Select
    variant="outlined"
    value="abc">
    {
      countries.map((country)=>(
      <MenuItem value={country.value}>{country.name}</MenuItem>
    ))
    }
    
    
  </Select>

  </FormControl>
      </div>

      {/*Header */}
        {/*Title+Select input dropdown field */}

      {/* InfoBoxes */}
      {/* ImfoBoxes */}
      {/* ImfoBoxes */}

      {/*Table */}
      {/*Graph */}

      {/*Map */}

    </div>
  );
}

export default App;
