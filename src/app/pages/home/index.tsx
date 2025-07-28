import { Link } from "react-router";
import { ChevronsRight } from "lucide-react";

const Home = () => {
    return (
        <section className="container mx-auto px-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="border p-8 font-mono tracking-tighter">
                    <Link to={"/about"} className="flex items-center gap-1 border-b text-lg">
                        About
                        <ChevronsRight size={24} strokeWidth={1.5} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
