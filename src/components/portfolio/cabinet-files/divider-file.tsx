import { FileContent } from "../file-content";

const DividerFile = ({ title }: { title: string }) => {
    return (
        <FileContent isDivider>
            <div className="flex w-fit items-center justify-center border px-6 py-4">
                <h1 className="font-mono text-xl font-semibold tracking-tighter">{title}</h1>
            </div>
        </FileContent>
    );
};

export default DividerFile;
