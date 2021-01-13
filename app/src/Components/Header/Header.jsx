import React from 'react'
import styled from "styled-components"

const HEADER = styled.header`
    width: 100%;
    padding: 50px 30px;
    margin-bottom: 15px;
    background-image: linear-gradient(to right, #201b1c,  #423e3d);
    color: #fff;
    //font-family: 'Times New Roman', Times, serif;  
    h2 {
        font-size: 32px;
    }
    p {
        font-size: 16px;
    }  

    @media( max-width: 769px){
        padding: 50px 30px;
    }

    @media( max-width: 426px){
        padding: 50px 30px;

        h2 {
            font-size: 26px;
        }
        p {
            font-size: 18px;
        }  
    }
`;

export default function Header() {
    return (
        <HEADER>
            <h2>Breweries</h2>
            <p>A breweries list By Open Breweries DB</p>
        </HEADER>
    )
}