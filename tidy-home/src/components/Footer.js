function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p style={CopyRight}>Tidy Home &copy; {year}</p>
        </footer>
    );
}

export default Footer;

// Styles
const CopyRight = { opacity: .3, textAlign: 'center' }