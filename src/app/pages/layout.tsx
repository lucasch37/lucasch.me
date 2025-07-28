import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Navbar />
            <div className="flex flex-1 flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
