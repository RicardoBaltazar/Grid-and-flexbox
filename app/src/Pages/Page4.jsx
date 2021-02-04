import React from 'react';
import styled from "styled-components";
import axios from 'axios'

import Cards from '../Components/Cards/Cards';

const FILTER = styled.div`
    label {
        padding: 0px 10px 0px 30px;
    }
    select {
        border: 1px solid #ccc;
        font-family: "Domine", serif;
        border-radius: 0.4em;
        padding: 0.5em;
        color: #4a4a4a;
    }
`

export default function Page4() {
    const [valueFilter, setValueFilter] = React.useState('')
    const [id] = React.useState('');
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries?page=23&by_type=${valueFilter}`)
            .then((response) => {
                setData(response.data)
            })
    }, [valueFilter]);

    const cards = data.map(data => {
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
            <FILTER>
                <label htmlFor="">Filter:</label>
                <select name="" id="" onChange={event => setValueFilter(event.target.value)}>
                    <option id='0' value=''>select...</option>
                    <option id='micro' value='micro'>micro</option>
                    <option id='brewpub' value='brewpub'>brewpub</option>
                    <option id='planning' value='planning'>planning</option>
                </select>
            </FILTER>
            <section>
                {cards}
            </section>
        </>
    );
}