import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import HomeLayout from "./pages/home/home-layout";
import AboutLayout from "./pages/about/about-layout";

const App = () => {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route element={<AboutLayout />}>
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default App;
