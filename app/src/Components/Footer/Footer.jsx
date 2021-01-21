import React from 'react'
import styled from "styled-components"

const FOOTER = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
    color: #4a4a4a;

    @media(max-width:426px){        
        span{
            margin-left:60px;
        }
    }
`

export default function Footer() {
    return (
        <FOOTER>
            <span>Breweries List</span>
        </FOOTER>
    )
}