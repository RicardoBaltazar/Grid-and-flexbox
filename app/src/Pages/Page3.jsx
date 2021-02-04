import React from 'react';
import Cards from '../Components/Cards/Cards'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Filter from '../Components/Filter/Filter'

let type = 'brewpub'

export default function Page3() {
    //const { id } = useParams('micro');
    const [ id ] = React.useState('');
    const [ data, setData ] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries?page=3&by_type=${id}`)
        .then((response) => {
            setData(response.data)
        })
    }, [])

    const cards = data.map(data =>{
        return (
            <>
            <Cards id={data.id}
            name={data.name}
            street={data.street}
            state={data.state}
            postal_code={data.postal_code}
            city={data.city}
            brewery_type={data.brewery_type}
            />
            </>
        )
    })

    return (
        <>
        
        <Filter />
        
        <section>
        {cards}

        </section>
        </>
    );
}