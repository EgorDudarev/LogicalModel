import React from "react";
import Splitter from "./Splitter/Splitter";
import "./Splitter/Splitter.css";

import { ReactTreeList } from "@bartaxyz/react-tree-list";

import ConnectionEditor from "./ConnectionEditor/ConnectionEditor.js";

import iconPG from "./Resource/pg.png";
import iconDB from "./Resource/db.png";
import iconSHM from "./Resource/shm.png";
import iconTBL from "./Resource/tbl.png";
import iconVER from "./Resource/ver.png";

class LogicalModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectItem: undefined,
            treeData: [
                {
                    id: "1",
                    label: "dc-pg-uat.russianpost.ru",
                    icon: <img src={iconPG} />,
                    metaData: {
                        type: "pgConnection",
                        host: "dc-pg-uat.russianpost.ru",
                        post: 5432,
                        dbName: "screports",
                        userName: "dwh-fs-service-r00",
                        password: "password"
                    },
                    open: true,
                    children: [
                        {
                            id: "2",
                            label: "dicts",
                            icon: <img src={iconDB} />,
                            open: true,
                            children: [
                                {
                                    id: "3",
                                    label: "public",
                                    icon: <img src={iconSHM} />,
                                    open: true,
                                    children: [
                                        {
                                            id: "4",
                                            label: "Таблицы",
                                            open: true,
                                            children: [
                                                {
                                                    id: "5",
                                                    label: "fps_structure",
                                                    icon: <img src={iconTBL} />
                                                },
                                                {
                                                    id: "6",
                                                    label: "mail_type",
                                                    icon: <img src={iconTBL} />
                                                },
                                                {
                                                    id: "7",
                                                    label: "mail_ctg",
                                                    icon: <img src={iconTBL} />
                                                }
                                            ]
                                        },
                                        {
                                            id: "8",
                                            label: "Представления"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "9",
                            label: "dicts_old",
                            icon: <img src={iconDB} />
                        }
                    ]
                },
                {
                    id: "10",
                    label: "dc-vertica-dev.russianpost.ru",
                    icon: <img src={iconVER} />,
                    open: true,
                    children: [
                        {
                            id: "11",
                            label: "DMPOST",
                            icon: <img src={iconSHM} />,
                            open: true,
                            children: [
                                {
                                    id: "12",
                                    label: "rpozoo",
                                    icon: <img src={iconTBL} />
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }

    onTreeListChange = (data) => {
        this.setState({ treeData: data });
    };

    onTreeListSelected = (item) => {
        this.setState({ selectItem: item });
    };

    onDrop = (dragingNode, dragNode, drogType) => {
        console.log("dragingNode:", dragingNode);
        console.log("dragNode:", dragNode);
        console.log("drogType:", drogType);
    };

    render() {
        const metaData = this.state.selectItem?.metaData;

        return (
            <Splitter percentage={false} firstaryInitialSize={250}>
                <ReactTreeList
                    data={this.state.treeData}
                    draggable={false}
                    onDrop={this.onDrop}
                    onChange={() => { }}
                    onChange={this.onTreeListChange}
                    itemDefaults={{ open: false, arrow: "▸" }}
                    onSelected={this.onTreeListSelected}
                />
                <ConnectionEditor connection={this.state.selectItem?.metaData} />
            </Splitter>
        );
    }
}

export default LogicalModel;