import React from 'react'
import styled from "styled-components"

const CARDS = styled.div`
    //border: 1px solid red;
    width: 300px;
    height: 320px;
    margin: 20px 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-decoration: inherit;
    
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
    }

    @media(max-width: 426px){
        width: 100%;
    }
`

export default function Cards() {

    const card = [
        {
            title: "titutlo 1",
            text: "texto 1",
            footer: "footer 1"
        }
    ];



    return (
        <CARDS>
            {card.map(function (card) {
                return (
                    <>
                    <div className='card-title'>
                        {card.title}
                    </div>
                    <div className='card-text'>
                        {card.text}
                    </div>
                    <div className='card-footer'>
                        {card.footer}
                    </div>
                    </>
                )
            })}
            
        </CARDS>
    )
    /*
            <div className='card-title'>
                title
            </div>
            <div className='card-text'>
                card
            </div>
            <div className='card-footer'>
                footer
            </div>
            */
}