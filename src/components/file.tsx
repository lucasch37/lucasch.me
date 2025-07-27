import { motion } from "motion/react";

type Props = {
    tabLocation: 0 | 1 | 2;
};

const File = ({ tabLocation }: Props) => {
    const tabOffsetClass =
        tabLocation === 0 ? "left-[110px]" : tabLocation === 1 ? "left-[300px]" : "left-[490px]";

    return (
        <div className="perspective-[1000px]">
            <motion.div
                drag="y"
                dragConstraints={{ top: -200, bottom: 0 }}
                dragElastic={0.05}
                dragTransition={{
                    bounceStiffness: 500,
                }}
                className="bg-background relative flex h-[400px] w-[800px] flex-col rounded-lg border p-8"
            >
                <div className={`absolute ${tabOffsetClass} -top-[38px]`}>
                    <div className="relative flex h-full w-full items-center justify-center">
                        <img src="/tab.png" className="w-[200px]" draggable={false} />
                        <div className="absolute flex w-[145px] justify-between tracking-tight">
                            <p>01</p>
                            <p>Section</p>
                        </div>
                    </div>
                </div>
                <h1 className="font-mono font-bold">title</h1>
                <h2 className="text-muted-foreground">subheading</h2>
            </motion.div>
        </div>
    );
};

export default File;
