import { ArrowBigDown } from "lucide-react";
import drawerContent from "./components/drawer-content";
import File from "./components/file";
import { motion } from "motion/react";
import drawer from "@/assets/drawer.png";

const About = () => {
    return (
        <section className="flex h-[calc(100vh-8rem)] flex-col pb-[60vh] sm:pb-[50vh]">
            {/* percise p and m calculations to make responsive, weird but it works */}
            <div className="relative -mb-150 flex w-full flex-1 scale-[40%] items-end justify-center md:scale-[60%] lg:scale-[80%] 2xl:scale-[100%]">
                <div className="absolute bottom-[800px]">
                    <div className="flex scale-[200%] items-center gap-3 lg:scale-[100%]">
                        <p className="font-mono text-lg tracking-tighter">
                            Click and drag on a tab
                        </p>
                        <ArrowBigDown />
                    </div>
                </div>
                <motion.div className="flex flex-col items-center space-y-[-380px]">
                    {drawerContent.map((file, i) => (
                        <File key={i} tabLocation={file.tabLocation} i={i} divider={file.divider} />
                    ))}
                </motion.div>
                <div className="absolute bottom-0">
                    {/* pixel perfect positioning lol */}
                    <div className="bg-background relative flex h-[360px] justify-center">
                        <div className="absolute -top-[290px] left-[67px] -z-10">
                            <div className="bg-primary h-[1.5px] w-[290px] origin-top-left rotate-[92.5deg]"></div>
                        </div>
                        <div className="absolute right-[53px] -z-10">
                            <div className="bg-primary h-[1.5px] w-[290px] origin-top-right rotate-[87.5deg]"></div>
                        </div>
                        <div className="w-[930px]">
                            <img src={drawer} className="h-auto w-full" />
                        </div>
                        <div className="absolute top-14 font-mono text-base font-semibold">
                            Lucas Chen
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
