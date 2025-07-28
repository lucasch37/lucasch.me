import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="inset-x-0 top-0 z-0 h-16 py-2">
            <div className="container mx-auto flex h-full items-center justify-between px-8">
                <Link to={"/"} className="font-mono text-xl tracking-tighter">
                    Lucas Chen
                </Link>
                <div className="flex items-center gap-8 font-mono tracking-tighter">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
