import File from "./components/file";
import { motion } from "motion/react";

const fileData: { tabLocation: 0 | 1 | 2 }[] = [
    { tabLocation: 0 },
    { tabLocation: 1 },
    { tabLocation: 2 },
    { tabLocation: 0 },
    { tabLocation: 1 },
    { tabLocation: 0 },
    { tabLocation: 1 },
    { tabLocation: 2 },
    { tabLocation: 0 },
    { tabLocation: 2 },
    { tabLocation: 1 },
    { tabLocation: 2 },
    { tabLocation: 0 },
    { tabLocation: 1 },
];

function App() {
    return (
        <section className="flex h-screen w-screen items-center justify-center">
            <motion.div className="space-y-[-380px]">
                {fileData.map((file, index) => (
                    <File key={index} tabLocation={file.tabLocation} />
                ))}

                <div className="bg-background relative z-50 flex h-[400px] w-[800px] items-center justify-center rounded-lg border">
                    <div className="border px-4 py-2 font-mono">Lucas Chen</div>
                </div>
            </motion.div>
        </section>
    );
}

export default App;
