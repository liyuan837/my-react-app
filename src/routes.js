/**
 * Created by stb on 2018/1/30.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import HelloWordSmart from './containers/helloWordContainer';
import MainSmart from './containers/mainContainer';
export default function getRoutes(store) {
    /**
     * 此处可做路由校验的东西
     */
    return (
            <Router>
                <Route path="/" component={HelloWordSmart}>
                </Route>

                <Route path="/main" component={MainSmart}>
                </Route>
            </Router>
    )
}