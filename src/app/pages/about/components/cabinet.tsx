import { motion } from "motion/react";
import File from "./file";
import drawerContent from "./drawer-content";
import drawer from "@/assets/drawer.png";

const Cabinet = () => {
    return (
        <>
            <motion.div className="flex flex-col items-center space-y-[-380px]">
                {drawerContent.map((file, i) => (
                    <File key={i} tabLocation={file.tabLocation} i={i} divider={file.divider} />
                ))}
            </motion.div>
            <div className="absolute bottom-0">
                <div className="bg-background relative flex h-[360px] justify-center">
                    <div className="absolute -top-[290px] left-[67px] -z-10">
                        <div className="bg-primary h-[1.5px] w-[290px] origin-top-left rotate-[92.5deg]"></div>
                    </div>
                    <div className="absolute right-[53px] -z-10">
                        <div className="bg-primary h-[1.5px] w-[290px] origin-top-right rotate-[87.5deg]"></div>
                    </div>
                    <div className="absolute -top-[290px] right-[66px] -z-10">
                        <div className="bg-primary h-[1.5px] w-[797px]"></div>
                    </div>
                    <div className="w-[930px]">
                        <img src={drawer} className="h-auto w-full select-none" draggable={false} />
                    </div>
                    <div className="absolute top-14 font-mono text-base font-semibold">
                        Lucas Chen
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cabinet;
