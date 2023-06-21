import { Link } from "react-router-dom";

function Settings() {
    return (
        <div>
            <h3>Manage</h3>
            <ul>
                <li><Link to="/settings/manage-rooms">Rooms</Link></li>
                <li><Link to="/settings/manage-tasks">Tasks</Link></li>
            </ul>
        </div>
    );
}

export default Settings;