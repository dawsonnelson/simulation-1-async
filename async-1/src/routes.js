import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Shelves from './components/Shelves/Shelves';


export default (
    <Switch>
        <Route exact path='/' component={Shelves}/>
    </Switch>
)