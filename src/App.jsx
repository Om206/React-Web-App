import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componenets/Home";
import Header from "./componenets/Header";
// import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Contact2 from "./componenets/Contact2";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/contact2.scss";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact2 />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default App;
