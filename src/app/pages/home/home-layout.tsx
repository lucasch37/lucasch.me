import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
    return (
        <div className="flex flex-col">
            <div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            <Navbar />
            <div className="flex flex-1 flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
