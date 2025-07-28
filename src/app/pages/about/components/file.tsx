import { motion } from "motion/react";
import React from "react";
import blackTab from "@/assets/tab-black.png";
import tab from "@/assets/tab.png";

type Props = {
    tabLocation: 0 | 1 | 2;
    i: number;
    divider?: boolean;
};

const File = ({ tabLocation, i, divider = false }: Props) => {
    const [dragY, setDragY] = React.useState(0);

    // for 3d effect, when selecting a file however, face user straight on
    const rotation = dragY < 0 ? 0 : -40;

    const tabOffsetClass =
        tabLocation === 0 ? "left-[60px]" : tabLocation === 1 ? "left-[250px]" : "left-[440px]";

    return (
        <div className="perspective-[1000px]">
            <motion.div
                drag="y"
                dragConstraints={{ top: -200, bottom: 0 }}
                dragElastic={0.05}
                dragTransition={{
                    bounceStiffness: 500,
                }}
                onUpdate={(latest) => setDragY((latest.y as number) || 0)}
                className={`bg-background relative flex h-[400px] ${dragY < 0 ? "w-[700px] scale-[114%]" : "w-[700px]"} flex-col rounded-lg border p-8`}
                style={{
                    translateZ: `${i * 2}px`,
                    rotateX: rotation,
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    className={`absolute ${tabOffsetClass} -top-[37.5px] ${dragY < 0 && "pt-[2.5px]"}`}
                    style={{
                        rotateX: -rotation,
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div className="relative flex h-full w-full items-center justify-center">
                        <img
                            src={divider ? blackTab : tab}
                            className="w-[200px]"
                            draggable={false}
                        />
                        <div
                            className={`absolute flex w-[145px] justify-between text-base text-[0.925rem] tracking-tight ${divider ? "text-white" : "text-black"}`}
                        >
                            <p>01</p>
                            <p>Section</p>
                        </div>
                    </div>
                </motion.div>
                <h1 className="font-mono font-semibold tracking-tighter">title</h1>
                <h2 className="text-muted-foreground text-sm">subheading</h2>
            </motion.div>
        </div>
    );
};

export default File;
