import {React,useEffect,useState} from 'react';
import Country from './Country';
 function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);
    return (
        <div style={{ textAlign: "center" }}>
            <h1>countries available: {countries.length}</h1>
            {countries.map((country) => {
                return <Country name={country.name} region={country.region} />;
            })}
      
        </div>
    );
};


  
export default Countries;