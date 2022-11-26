import React from 'react';

const Alert = (props) => {

    function capitalize(text) {
        var c = text[0].toUpperCase();
        return text = c + text.slice(1);
    }
    return (
        <div style={{ height: '20px' }}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
                </div>
            }
        </div>

    );
}

export default Alert;