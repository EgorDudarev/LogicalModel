import React, { Component, StrictMode } from 'react';
import LogicalModel from "./LogicalModel";

export class Entities extends Component {
    static displayName = Entities.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StrictMode>
                <LogicalModel />
            </StrictMode>
        );
    }
}
