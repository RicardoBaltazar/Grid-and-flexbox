import React, { Component } from 'react'
import styled from "styled-components"
import axios from 'axios'



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
export default class Filter extends Component {

    state = {
        datas: [],

    }


    componentDidMount() {
        //axios.get(`https://api.openbrewerydb.org/breweries`)
        axios.get(`https://api.openbrewerydb.org/breweries`)
            .then(res => {
                const datas = res.data;
                this.setState({ datas });
                console.log(datas)
            })
    }

    render() {

        const filter = this.state.datas.map(data => {
            return (
            <option  id={data.id} value={data.brewery_type}>
                {data.brewery_type}
            </option>
            )
        })

        return (
            <FILTER>
                <label htmlFor="">Filter:</label>
                <select name="" id="">
                    <option id='0' value=''>select...</option>
                    {filter}
                </select>
            </FILTER>
        )
    }
}