'use strict';

import React from 'react';
import { ContextFactory } from 'geiger';

import App from './App';

require('../../styles/main.sass');

// Declaring our App Context
const Context = ContextFactory({
    user: React.PropTypes.object.isRequired
    //, todostore: React.PropTypes.object.isRequired,
    //, todoactions: React.PropTypes.object.isRequired
});

// Fetching app config variables from the HTML page
const config = JSON.parse(window.unescape(document.getElementsByName('config/app')[0].content));

// Build your actions and stores here
//const todoactions = new TodoActions({ apiendpoint: config.apiendpoint });
//const todostore = new TodoStore({ actions: todoactions });

React.render(
    (<Context
        user={config.user}
        //todostore={todostore}
        //todoactions={todoactions}
        render={() => <App /> } />
    ),
    document.getElementById('app')
);
