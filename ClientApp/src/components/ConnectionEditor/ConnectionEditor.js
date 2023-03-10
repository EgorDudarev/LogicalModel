import React from "react";
import PropTypes from "prop-types";

import "./ConnectionEditor.css";
import PostgreSqlEditor from "./PostgreSqlEditor/PostgreSqlEditor";
import InformationBox from "./../Modal/InformationBox/InformationBox";

class ConnectionEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connection: props.connection,
            showBox: false
        };
    }

    onChangeConnection = (newConnection) => {
        this.setState({
            connection: {
                ...this.state.connection,
                ...newConnection
            },
            showBox: true
        });
    };

    onCloseInformationBox = (e) => {
        this.setState({
            showBox: false
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { connection } = this.props;
        if (prevProps.connection !== connection) {
            this.setState({ connection: connection });
        }
    }

    getEditor = () => {
        const { connection } = this.state;
        console.log("getEditor");
        switch (connection?.type) {
            case "pgConnection":
                return (
                    <PostgreSqlEditor
                        host={connection.host}
                        port={connection.port}
                        dbName={connection.dbName}
                        userName={connection.userName}
                        password={connection.password}
                        handleOnChangeConnection={this.onChangeConnection}
                    />
                );

            default:
                console.log("getEditor null");
                return <div></div>;
        }

        // console.log("ce log: ", connection);
    };

    render() {
        return (
            <div className="connectioneditor">
                <div className="connectioneditor-container">{this.getEditor()}</div>
                <div className="connectioneditor-buttons">
                    <button className="connectioneditor-test" onClick={this.onChangeConnection}>Тест соединения</button>
                    <button className="connectioneditor-save">Сохранить</button>
                </div>
                <InformationBox show={this.state.showBox} onClose={this.onCloseInformationBox} />
            </div>
        );
    }
}

ConnectionEditor.propTypes = {
    connection: PropTypes.any
};

ConnectionEditor.defaultProps = {
    connection: undefined
};

export default ConnectionEditor;
