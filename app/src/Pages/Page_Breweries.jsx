import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import axios from 'axios'

const CARD_BREWERIES = styled.div`
    min-width: 100%;
    margin: 20px 0;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-decoration: inherit;
    color: #000;
    display: flex;
    flex-direction: column;

    h1{
        margin-bottom: 25px;
    }

    p{
        color: #4a4a4a;
        margin-bottom: 5px;
    }

    @media(max-width:426px){
        min-width: 90%;
    }
`

const LINK_BACK = styled.a`
    color: #000;
    font-size: 18px;
    margin: 25px 0 10px 0;
    display: flex;
    align-items: center;

    @media(max-width:426px){
        min-width: 95%;
    }
`

export default function PageBreweries() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries/${id}`)
            .then((response) => {
                setData(response.data)
            })
    }, [])

    return (
        <>
            <LINK_BACK href="/Page1"> <BsArrowLeft /> Back</LINK_BACK>
            <CARD_BREWERIES>
                <h1>{data.name}</h1>
                <p>Type: {data.brewery_type}</p>
                <p>Street: {data.street}</p>
                <p>City: {data.city}</p>
                <p>State: {data.state}</p>
                <p>Country: {data.country}</p>
                <p>Website: <a href={data.website_url} target='blank'>{data.website_url}</a></p>
                <p>Phone: {data.phone}</p>
                <p>Open in Maps: <a href={
                    `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`} target='blank'>
                    {data.latitude},{data.longitude}
                </a></p>
            </CARD_BREWERIES>
        </>
    )
}