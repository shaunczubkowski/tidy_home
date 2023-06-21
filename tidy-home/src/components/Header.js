import Nav from "./Nav";

function Header({title}) {
    return (
        <header>
            <h1>{title}</h1>
            <Nav />
        </header>
    );
}

export default Header;