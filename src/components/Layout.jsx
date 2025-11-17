import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

import { Outlet } from "react-router";
const Layout = () => {
    return (
        <>
            <Header />
            <Container as="main">
                <main>
                    <Outlet />
                </main>
            </Container>
            <Footer />
        </>
    )
}
export default Layout;