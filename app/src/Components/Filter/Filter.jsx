import React from 'react'
import styled from "styled-components"

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

export default function Filter() {
    return (
        <FILTER>
            <label htmlFor="">Filter:</label>
            <select name="" id="">
                <option>select...</option>
            </select>
        </FILTER>
    )
}