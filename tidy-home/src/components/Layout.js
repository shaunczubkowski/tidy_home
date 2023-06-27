import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ pageTitle }) {
    return (
        <>
            <div style={Wrapper}>
                <Header title={pageTitle}></Header>
                <main style={MainWrapper}>
                    <Outlet />
                </main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Layout;

// Styles
const Wrapper = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}
const MainWrapper = { flexGrow: 2, maxWidth: '95%', margin: '0 1.4rem' }