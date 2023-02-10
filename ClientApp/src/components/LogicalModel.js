import React from "react";
import Splitter from "./Splitter/Splitter";
import "./Splitter/Splitter.css";

class LogicalModel extends React.Component {
    render() {
        return (
            <Splitter percentage={false} firstaryInitialSize={250}>
                <div>Дерево</div>
                <div>Свойства</div>
            </Splitter>
        );
    }
}

export default LogicalModel;