import { useState } from "react";
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const {name, flags, cca3} = country
    const [Visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!Visited)
    }
    return (
        <div className={`country ${Visited && 'visited'}`}>
            <h3 style={{color: Visited ? 'purple' : 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Code: {cca3}</p>
            <button onClick={handleVisitedCountries}>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            <br />
            <button onClick={()=> handleVisitedFlag(flags)}>Add Flag</button>
            {Visited ? 'i have visited' : ''}
        </div>
    );
};

export default Country;