import { Routes, Route } from "react-router";
import Home from "./pages";
import About from "./pages/about";
import Layout from "./pages/layout";
import AboutLayout from "./pages/about/about-layout";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            <Route element={<AboutLayout />}>
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default App;
