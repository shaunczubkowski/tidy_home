import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout({pageTitle}) {
    return (
        <>
            <Header title={pageTitle}></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    );
}

export default Layout;