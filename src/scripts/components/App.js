'use strict';

import React from 'react';

export default class App extends React.Component {

    static contextTypes = {
        user: React.PropTypes.object.isRequired
    };

    render() {

        const { user } = this.context;

        return (
            <div className='container'>
                <h1><i className="fa fa-rocket" /> Hello, {user.firstname} {user.lastname} !</h1>
            </div>
        );
    }
}
