import React from 'react'
import styled from "styled-components"

const FOOTER = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
    color: #4a4a4a;
`

export default function Footer() {
    return (
        <FOOTER>
            <span>Breweries List</span>
        </FOOTER>
    )
}