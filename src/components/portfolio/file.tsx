import { motion } from "motion/react";
import React from "react";
import blackTab from "@/assets/images/cabinet/tab-black.png";
import tab from "@/assets/images/cabinet/tab.png";
import { useBrowserEngine } from "@/hooks/use-browser";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type Props = {
    tabLocation: number;
    title: string;
    isDivider?: boolean;
    i: number;
    children: React.ReactNode;
};

const browserSpecificOptions = {
    chromium: {
        dragMomentum: true,
        dragElastic: 0.05,
    },
    // on non chromium browsers, the drag effect is bugged, disabling momentum and elasticity fixes this
    nonChromium: {
        dragMomentum: false,
        dragElastic: 0.0,
    },
};

const File = ({ tabLocation, title, children, isDivider = false, i }: Props) => {
    const isMobile = useIsMobile();
    const browserEngine = useBrowserEngine();
    const [dragY, setDragY] = React.useState(0);

    // for 3d effect, when selecting a file however, face user straight on
    const rotation = dragY < 0 ? 0 : -40;

    const tabOffsetClass =
        tabLocation === 0 ? "left-[60px]" : tabLocation === 1 ? "left-[250px]" : "left-[440px]";

    const dragConfig =
        browserSpecificOptions[browserEngine === "chromium" ? "chromium" : "nonChromium"];

    // increase drag speed on mobile since dragging is harder when scaled down
    const dragSpeedMultiplier = isMobile ? 2 : 1;
    const dragConstraintTop = isMobile ? -90 : -250;

    // on mobile, apply dragSpeedMultiplier
    // add 50px to counteract the file appearing to move up when it rotates
    const translateY = isMobile
        ? `${dragY * dragSpeedMultiplier + (dragY < 0 ? 50 : 0)}px`
        : dragY < 0
          ? `50px`
          : "0px";

    return (
        <div className="perspective-[1000px]">
            <motion.div
                drag="y"
                dragConstraints={{ top: dragConstraintTop, bottom: 0 }}
                dragElastic={dragConfig.dragElastic}
                dragTransition={{
                    bounceStiffness: 500,
                }}
                dragMomentum={dragConfig.dragMomentum}
                onUpdate={(latest) => setDragY((latest.y as number) || 0)}
                className={cn(
                    "bg-background relative flex h-[400px] w-[700px] flex-col rounded-lg border p-6",
                    dragY < 0 && "scale-[114%]",
                )}
                style={{
                    translateZ: `${i * 2}px`,
                    translateY,
                    rotateX: rotation,
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    className={cn(
                        "absolute -top-[37.5px]",
                        tabOffsetClass,
                        dragY < 0 && "pt-[2.5px]",
                    )}
                    style={{
                        rotateX: -rotation,
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div className="relative flex h-full w-full cursor-pointer items-center justify-center">
                        <img
                            src={isDivider ? blackTab : tab}
                            className="w-[200px]"
                            draggable={false}
                        />
                        <div
                            className={cn(
                                "absolute flex w-[145px] justify-between text-base text-[0.925rem] tracking-tight",
                                isDivider ? "text-white" : "text-black",
                            )}
                        >
                            <p>{String(i).padStart(2, "0")}</p>
                            <p>{title}</p>
                        </div>
                    </div>
                </motion.div>
                {children}
            </motion.div>
        </div>
    );
};

export default File;
