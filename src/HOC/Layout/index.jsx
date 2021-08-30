import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
