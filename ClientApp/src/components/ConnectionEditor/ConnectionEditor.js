import React from "react";
import PropTypes from "prop-types";

import "./ConnectionEditor.css";
import PostgreSqlEditor from "./PostgreSqlEditor/PostgreSqlEditor";

class ConnectionEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connection: props.connection
        };
    }

    onChangeConnection = (newConnection) => {
        this.setState({
            connection: {
                ...this.state.connection,
                ...newConnection
            }
        });
    };

    componentDidUpdate(prevProps, prevState) {
        const { connection } = this.props;
        if (connection && prevProps.connection !== connection) {
            this.setState({ connection: connection });
        }
    }

    getEditor = () => {
        const { connection } = this.state;
        console.log(this.state);

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
                return <></>;
        }

        // console.log("ce log: ", connection);
    };

    render() {
        return (
            <div className="connectioneditor">
                <div className="connectioneditor-container">{this.getEditor()}</div>
                <div className="connectioneditor-buttons">
                    <button className="connectioneditor-test">Тест соединения</button>
                    <button className="connectioneditor-save">Сохранить</button>
                </div>
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
