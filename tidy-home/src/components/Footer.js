function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p>Tidy Home &copy; {year}</p>
        </footer>
    );
}

export default Footer;