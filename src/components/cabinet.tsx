import { motion } from "motion/react";
import File from "./file";
import cabinetLayout from "./cabinet-layout";
import cabinetImg from "@/assets/images/cabinet/cabinet.png";

const Cabinet = () => {
    return (
        <>
            <motion.div className="flex flex-col items-center space-y-[-380px] px-16 pt-[30vh] [clip-path:inset(0_0_360px_0)]">
                {cabinetLayout.map((file, i) => (
                    <File
                        key={i}
                        title={file.title}
                        tabLocation={file.tabLocation}
                        isDivider={file.isDivider}
                        i={i}
                    >
                        {file.content}
                    </File>
                ))}
            </motion.div>
            <div className="absolute bottom-0">
                <div className="relative mb-[240px] flex h-[120px] justify-center">
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
                        <img
                            src={cabinetImg}
                            className="h-auto w-full select-none"
                            draggable={false}
                        />
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
