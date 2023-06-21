function SettingsHeader({title, actionName}) {
    return (
        <div>
            <h1>{title}</h1>
            {actionName && <button type="button">{actionName}</button>}
        </div>
    );
}

export default SettingsHeader;