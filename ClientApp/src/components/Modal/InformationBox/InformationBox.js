import React, { useEffect } from 'react';
import "./InformationBox.css";

export default function InformationBox(props) {
    console.log(props)

    if (!props.show) {
        return null
    }

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    return (
        <div className="informationBox" onClick={props.onClose}>
            <div className="informationBox-content">
                <div className="informationBox-header">
                    <h4 className="informationBox-title">Modal title</h4>
                </div>
                <div className="informationBox-body">
                    This is information box content
                </div>
                <div className="informationBox-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
};