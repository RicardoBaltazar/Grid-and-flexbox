import React from 'react'
import styled from "styled-components"
//import { Link } from 'react-router-dom'

const LINK = styled.a`
    padding: 8px 12px;
    max-width: 10px;
    border: 1px solid #423e3d;
    border-radius: 4px;
    margin: 25px 8px 40px 5px;
    text-decoration: none;
    color: #000;
    

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #423e3d;
        transition: 0.2s;

       
    }

    /*
  a {
    color: #423e3d;
    te
    */
`

export default function Pagination(props){
    return (    
        <LINK href={props.href}>{props.number}</LINK>
    )
}