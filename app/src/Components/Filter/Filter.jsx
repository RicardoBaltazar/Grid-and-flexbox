import React from 'react';
import styled from "styled-components";
import axios from 'axios';

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

export default function Filter(props) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries`)
            .then((response) => {
                setData(response.data)
            })
    }, [])

    const filter = data.map(data => {
        return (
            <option id={data.id} value={data.brewery_type}>
                {data.brewery_type}
            </option>
        )
    })

    return (
        <>
            <FILTER>
                <label htmlFor="">Filter:</label>
                <select name="" id="" onChange={event => props.value(event.target.value)}>
                    <option id='0' value=''>select...</option>
                    <option id='micro' value='micro'>micro</option>
                    <option id='brewpub' value='brewpub'>brewpub</option>
                    <option id='regional' value='regional'>regional</option>
                    <option id='large' value='large'>large</option>
                    <option id='planning' value='planning'>planning</option>
                    <option id='bar' value='bar'>bar</option>
                    <option id='contract' value='contract'>contract</option>
                    <option id='proprietor' value='proprietor'>proprietor</option>
                    {/*filter*/}
                </select>
            </FILTER>
        </>
    )
}