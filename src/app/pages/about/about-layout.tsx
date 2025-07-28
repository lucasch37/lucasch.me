import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

const AboutLayout = () => {
    return (
        // prevent overflow issues with the drawer
        <div className="flex h-screen flex-col overflow-hidden antialiased">
            <Navbar />
            <div className="flex flex-1 flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default AboutLayout;
