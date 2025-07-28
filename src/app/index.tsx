import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./pages/layout";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default App;
