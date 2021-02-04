import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
import Page4 from '../Pages/Page4'
import PageBreweries from '../Pages/Page_Breweries'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/Page1' component={Page1} />
                <Route exact path='/page2' component={Page2} />
                <Route exact path='/page3' component={Page3} />
                <Route exact path='/page4' component={Page4} />
                <Route exact path='/:id' component={PageBreweries} />
                <Redirect from='' to='/Page1' />
            </Switch>
        </BrowserRouter>
    )
}