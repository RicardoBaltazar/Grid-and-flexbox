import React from 'react'
import styled from "styled-components"

const FILTER = styled.div`
    label {
        padding: 0px 10px 0px 30px;
    }
`

export default function Filter() {
    return (
        <FILTER>
            <label htmlFor="">Filter</label>
            <select name="" id="">
                <option>select...</option>
            </select>
        </FILTER>
    )
}