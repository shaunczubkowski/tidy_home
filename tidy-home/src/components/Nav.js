import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav style={Wrapper}>
                <ul style={ListWrapper} role="navigation">
                    <li>
                        <Link style={NavItemLink} to="/">Home</Link>
                        <Link style={NavItemLink} to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;

const Wrapper = { display: "flex", justifyContent: "Center"};
const ListWrapper = { listStyle: "none", padding: 0, margin: 0 };
const NavItemLink = { textDecoration: "none", margin: "1rem", color: "#FFF", borderBottom: "3.5px solid rgba(164,20,63,0.5)" };