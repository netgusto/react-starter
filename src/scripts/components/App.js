'use strict';

import React from 'react/addons';

export default class App extends React.Component {

    static contextTypes = {
        user: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div className='container'>
                <h1><i className="fa fa-rocket" /> Hello, World !</h1>
            </div>
        );
    }
}
