import File from "./components/file";
import { motion } from "motion/react";

const fileData: { tabLocation: 0 | 1 | 2; black?: boolean }[] = [
    { tabLocation: 0, black: false },
    { tabLocation: 1, black: false },
    { tabLocation: 2, black: false },
    { tabLocation: 0, black: true },
    { tabLocation: 1, black: false },
    { tabLocation: 2, black: false },
    { tabLocation: 1, black: false },
    { tabLocation: 2, black: false },
    { tabLocation: 0, black: false },
    { tabLocation: 2, black: false },
    { tabLocation: 1, black: false },
    { tabLocation: 2, black: true },
    { tabLocation: 0, black: false },
    { tabLocation: 1, black: false },
    { tabLocation: 2, black: false },
];

function App() {
    return (
        <section className="relative flex h-screen w-full items-end justify-center overflow-y-hidden">
            <motion.div className="flex flex-col items-center space-y-[-380px]">
                {fileData.map((file, i) => (
                    <File key={i} tabLocation={file.tabLocation} i={i} black={file.black} />
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
                    <div className="w-[930px]">
                        <img src="/drawer.png" className="h-auto w-full" />
                    </div>
                    <div className="absolute top-14 font-mono text-base font-semibold">
                        Lucas Chen
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
