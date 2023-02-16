import React from "react";
import PropTypes from "prop-types";

import "./PostgreSqlEditor.css";

class PostgreSqlEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            host: this.props.host,
            port: this.props.port,
            dbName: this.props.dbName,
            userName: this.props.userName,
            password: this.props.password
        };
    }

    OnChangePortValue = (e) => {
        const varPort = e.target.value.replace(/\D/, "");
        this.setState({ port: varPort });
    };

    render() {
        const { handleOnChangeConnection } = this.props;

        return (
            <div>
                <fieldset className="postgresqleditor-fieldset" title="Сервер">
                    <legend>Сервер</legend>
                    <div className="postgresqleditor-server">
                        <div className="postgresqleditor-host">
                            <div className="postgresqleditor-host-lbl">Хост:</div>
                            <div className="postgresqleditor-host-edit">
                                <input
                                    id="postgresqleditorHost"
                                    onChange={(event) => {
                                        handleOnChangeConnection &&
                                            handleOnChangeConnection({
                                                host: event.currentTarget.value
                                            });
                                    }}
                                    value={this.props.host}
                                />
                            </div>
                        </div>
                        <div className="postgresqleditor-port">
                            <div className="postgresqleditor-port-lbl">Порт:</div>
                            <div className="postgresqleditor-port-edit">
                                <input
                                    id="postgresqleditorPort"
                                    onChange={this.OnChangePortValue}
                                    value={this.state.port}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="postgresqleditor-server">
                        <div className="postgresqleditor-host-lbl">База данных:</div>
                        <div className="postgresqleditor-host">
                            <div className="postgresqleditor-host-edit">
                                <input id="postgresqleditorBD" value={this.state.dbName} />
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="postgresqleditor-fieldset" title="Сервер">
                    <legend>Аутентификация</legend>
                    <div className="postgresqleditor-auth">
                        <div className="postgresqleditor-auth-lbl">Пользователь:</div>
                        <div className="postgresqleditor-auth-edit">
                            <input id="postgresqleditorUser" value={this.state.userName} />
                        </div>
                    </div>
                    <div className="postgresqleditor-auth">
                        <div className="postgresqleditor-auth-lbl">Пароль:</div>
                        <div className="postgresqleditor-auth-edit">
                            <input id="postgresqleditorPass" value={this.state.password} />
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

PostgreSqlEditor.propTypes = {
    host: PropTypes.string,
    port: PropTypes.number,
    dbName: PropTypes.string,
    userName: PropTypes.string,
    password: PropTypes.string,
    handleOnChangeConnection: PropTypes.func
};

PostgreSqlEditor.defaultProps = {
    host: "localhost",
    port: 5432,
    dbName: "",
    userName: "postgre",
    password: ""
};

export default PostgreSqlEditor;
