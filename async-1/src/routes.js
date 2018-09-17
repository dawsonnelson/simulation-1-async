import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Shelves from './components/Shelves/Shelves';
import BinA from './components/Bins/BinA'

export default (
    <Switch>
        <Route exact path='/' component={Shelves}/>
        <Route path='/BinA' component={BinA}/>
        {/* <Route path="/:id" component={Test}/> */}
    </Switch>
)