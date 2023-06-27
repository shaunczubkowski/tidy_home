import { useState } from "react";

function SettingsHeader({ title, actionName, onClickEvent }) {
    const [state, setState] = useState('show')

    const handleClick = () => {
        state === 'show' ? setState('hide') : setState('show');
        onClickEvent()
    }

    return (
        <div style={Container}>
            <h1>{title}</h1>
            {(actionName && state === 'show') && <button style={ActionButton} onClick={() => handleClick()} type="button">{actionName}</button>}
        </div>
    );
}

export default SettingsHeader;

// styles
const ActionButton = {
    alignSelf: 'center',
    backgroundColor: 'rgba(164,20,63,1)',
    borderRadius: '17px',
    border: 'none',
    color: '#fff',
    fontSize: '1.1rem',
    height: '45px',
    width: '125px'
};
const Container = { display: 'flex', justifyContent: 'space-between', margin: '25px 0'};