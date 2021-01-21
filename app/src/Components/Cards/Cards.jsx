//import React, { Component } from 'react'
import React from 'react'
import { Switch } from 'react-router-dom'
import styled from "styled-components"
//import testes from "../../services/teste"
//import axios from 'axios'


let page = 2

const CARDS = styled.div`
    width: 300px;
    min-width: 300px;
    height: 320px;
    margin: 20px 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-decoration: inherit;
    display: flex;
    flex-direction: column;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    }

    .card-title {
        padding: 20px 20px;
        font-size: 2em;
        font-weight: 500;
    }

    .card-text{
        padding: 20px 20px 0px 20px;
        display: flex;
        flex-direction: column;
        font-weight: 300;
        color: #4a4a4a;
        flex-grow: 1;
    }

    .card-footer {
        border-top: 1px solid #ededed;
        padding: 8px 20px;
        bottom: 0;
    }



    @media(max-width: 426px){
        width: 100%;
    }
`

const SPAN = styled.span`
        padding: 5px;
        border-radius: 4px;
        font-size: 11px;
        background-color: ${props => props.backgroundColor};
        color: ${props => props.color};    
`

/*
export default class Cards extends Component {

    render() {
        */

export default function Cards(props){

    let spanFooter = <SPAN>{props.brewery_type}</SPAN>
    switch (props.brewery_type) {
        case 'micro':
            spanFooter = <SPAN backgroundColor='#00d1b2' color='#fff'>{props.brewery_type}</SPAN>
            break;
        case 'bar':
            spanFooter = <SPAN backgroundColor='#44ff00' color='#000'>{props.brewery_type}</SPAN>
            break
        case 'regional':
            spanFooter = <SPAN backgroundColor='#3273dc' color='#fff'>{props.brewery_type}</SPAN>
            break
        case 'brewpub':
            spanFooter = <SPAN backgroundColor='#ffdd57' color='#000'>{props.brewery_type}</SPAN>
            break
        case 'large':
            spanFooter = <SPAN backgroundColor='#f44336' color='#fff'>{props.brewery_type}</SPAN>
            break
        case 'planning':
            spanFooter = <SPAN backgroundColor='#555555' color='#fff'>{props.brewery_type}</SPAN>
            break
        case 'contract':
            spanFooter = <SPAN backgroundColor='#00fbff' color='#000'>{props.brewery_type}</SPAN>
            break
        case 'proprietor':
            spanFooter = <SPAN backgroundColor='#ee00ff' color='#fff'   >{props.brewery_type}</SPAN>
            break
        default:
            break;
    }

            return (
                <>
                <CARDS>
                    <div className='card-title'>
                        <p>{props.name}</p>
                    </div>
                    
                    <div className='card-text'>
                        <p>{props.street}</p>
                        <p>{props.state} - {props.postal_code}</p>
                        <p>{props.city}</p>
                    </div>

                    <div className='card-footer'>
                        {spanFooter}
                    </div>
                </ CARDS>
                </>
            )
        
    }

    /*
    
    state = {
        datas: [],
      }
    
      componentDidMount() {
        //axios.get(`https://api.openbrewerydb.org/breweries`)
        axios.get(`https://api.openbrewerydb.org/breweries?page=1`)
          .then(res => {
            const datas = res.data;
            this.setState({ datas });
            console.log(datas)
          })
      }

    render() {


        const cards = this.state.datas.map(data =>{
            return (
                <>
                <CARDS>
                    <div className='card-title'>
                        {data.name}
                    </div>
                    
                    <div className='card-text'>
                        <p>{data.street}</p>
                        <p>{data.state} - {data.postal_code}</p>
                        <p>{data.city}</p>
                    </div>

                    <div className='card-footer'>
                        <span>{data.brewery_type}</span>
                    </div>
                </ CARDS>
                </>
            )
        })

        return (
            <>
                {cards}
            </>
        )
    }

    /*
    <div className='card-title'>
                    {testes[0].title}
                    {cards}
                </div>
                <div className='card-text'>
                    {testes[0].text}
                    {cards}

                </div>
                <div className='card-footer'>
                    {testes[0].footer}
                    {cards}
                </div>
                
            }
            */