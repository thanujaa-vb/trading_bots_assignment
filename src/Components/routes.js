import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import BotLists from './bot_lists.js';
import history from './History.js';
import bot_details from "./bot_details.js";
class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <switch>
                    <Route path="/" exact component={BotLists} />
                    <Route path="/bot-details/:id" component={bot_details} />
                </switch>
            </Router>
        )
    }
}
export default Routes;