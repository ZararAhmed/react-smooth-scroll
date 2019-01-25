import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullPageReactApp from './RFPage/FullPageReactApp';
import FullPageReact from './FullPageReact';
import SmoothScroll from './SmoothScroll/SmoothScroll';
import SmoothPageScroll from './SmoothScroll/SmoothPageScroll';
class AppRoutes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={FullPageReact} />
                    <Route exact path='/flick' component={FullPageReact} />
                    <Route exact path='/scroll' component={SmoothPageScroll} />
                    <Route path='/scrollto' component={SmoothScroll} />
                    <Route path='/flickto' component={FullPageReactApp} />
                </Switch>
            </div>
        );
    }
}

export default AppRoutes;