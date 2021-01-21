import React, { Component } from 'react'
import Cards from '../Components/Cards/Cards'
import axios from 'axios'

export default class Page3 extends Component {

    state = {
        datas: [],
      }
    
      componentDidMount() {
        //axios.get(`https://api.openbrewerydb.org/breweries`)
        axios.get(`https://api.openbrewerydb.org/breweries?page=3`)
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
                <Cards 
                name={data.name}
                street={data.street}
                state={data.state}
                postal_code={data.postal_code}
                city={data.city}
                brewery_type={data.brewery_type}
                />
                </>
            )
        })

        return (
            <>
                {cards}
            </>
        )
    }
}