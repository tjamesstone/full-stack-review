import React from 'react'
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import Admin from './components/Admin/Admin'
import {Switch, Route} from 'react-router-dom'

export default(
    <Switch>
        <Route exact pather ='/' component={Catalog}/>
        <Route path='/cart' component={Cart} />
        <Route path='/admin' component={Admin}/>
    </Switch>
)