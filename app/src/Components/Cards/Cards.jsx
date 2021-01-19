import React, { Component } from 'react'
import styled from "styled-components"
import testes from "../../services/teste"
import axios from 'axios'



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

    .card-footer span{
        border: 1px blue solid;
        padding: 5px;
        border-radius: 4px;
        font-size: 11px;
    }

    @media(max-width: 426px){
        width: 100%;
    }
`

export default class Cards extends Component {

    state = {
        datas: []
      }
    
      componentDidMount() {
        axios.get(`https://api.openbrewerydb.org/breweries`)
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
                */

}