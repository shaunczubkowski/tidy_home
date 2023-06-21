import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav>
                <ul role="navigation">
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;