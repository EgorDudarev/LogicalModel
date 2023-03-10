import React, { Component } from 'react';
import { Entities } from './components/Entities';

import './custom.css'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className="App">
                <Entities />
            </div>
        );
    }
}