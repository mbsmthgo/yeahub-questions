import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}