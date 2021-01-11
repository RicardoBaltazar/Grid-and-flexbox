import React from 'react'
import styled from "styled-components"

const HEADER = styled.header`
    width: 100%;
    padding: 30px 200px;
    background-image: linear-gradient(to right, #201b1c,  #423e3d);
    color: #fff;
    font-family: 'Times New Roman', Times, serif;  
    h2 {
        font-size: 25px;
    }
    p {
        font-size: 19px;
    }  

    @media( max-width: 769px){
        padding: 30px 75px;
    }

    @media( max-width: 426px){
        padding: 30px 50px;

        h2 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
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