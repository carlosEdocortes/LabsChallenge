import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Redirect,Switch}from 'react-router-dom';
import Search from './components/Search';
import Details from './components/Details';
import store from './redux/store';


const Root=(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/search" component={Search}/>
                <Route path="/details/:itemId" component={Details}/>
                <Redirect from='/' to ='/search'/>
            </Switch>
    </BrowserRouter>

    </Provider>
    
);

ReactDom.render(Root,document.getElementById('root'));
