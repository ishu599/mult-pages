// Filename - App.js

import React from "react";
import Navbar from "./Components/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index.js";
import About from "./pages/ABOUT.JSX";
import Blogs from "./pages/blogs.jsx";
import SignUp from "./pages/signup.jsx";
import Contact from "./pages/contact.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/blogs" element={<blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}

export default App;
