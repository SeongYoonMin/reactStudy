import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function Movie () {
    return <Router>
        <Routes>
            <Route path="/Detail" element={<Detail />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
}

export default Movie